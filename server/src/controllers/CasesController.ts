import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup'

import Case from '../models/Case';
import caseView from '../views/cases_view';

/**
 * request.files será um objeto contendo inicialmente 2 propriedades:
 ** banner - com no máximo um arquivo como foi especificado em router.
 ** images - Com no máximo 8 arquivos, de imagens.
 */
interface Files {
  [field: string]: Express.Multer.File[],
};

export default {

	/**
   * Requisitar os dados, valida-los e criar a tabela no Banco.
	 * @returns Status 201 e um objeto com as informações do case criado
	 */
	async create(  request: Request, response: Response  ) {

		// Desestruturando dados requisitados, let pois alguns sofrerão mudanças ***
		let {
			title,
			genre,
			description,
			technologies,
			website,
			open_source,
    } = request.body;

    // Se não for um array vai ser.
    if(  !Array.isArray(technologies) && technologies  ) technologies = Array(technologies);

    // Desmembrando o array de string em um array de objeto.
    technologies = technologies?.map((technologie: string) => {
      return { technologie }
    });

    // Imagens
    const requestImages = request.files as Files;           // Requisitando as imagens
    const banner = requestImages['banner'][0].filename;     // Imagem do banner e demais imagens abaixo.
    const images = requestImages['images']?.map(image => {
      return { path: image.filename }
    });
		// ***

		// Agrupando todos os dados em uma variável.
		const data = {
			title,
			genre,
			description,
			technologies,
			website,
      open_source,
      banner,
			images
    };

    console.log(data);

    // Validação dos dados

    /**
     * Expressão regular par Url, irá corresponder os seguintes casos:
     ** http://www.foufos.gr
     ** https://www.foufos.gr
     ** http://foufos.gr
     ** http://www.foufos.gr/kino
     ** http://werer.gr
     ** www.foufos.gr
     ** www.mp3.com
     ** www.t.co
     ** http://t.co
     ** http://www.t.co
     ** https://www.t.co
     ** www.aa.com
     ** http://aa.com
     ** http://www.aa.com
     ** https://www.aa.com
     */
    const urlExpression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    const urlRegExp = new RegExp(urlExpression);

    const schema = Yup.object().shape({
			title:        	Yup.string().required('Título é obrigatório.'),
			genre: 			    Yup.string().required('Gênero do projeto obrigatório.'),
			description: 	  Yup.string().required('Informe uma descrição para o projeto.'),
			technologies:   Yup.array().of(
				Yup.object().shape({
					technologie: Yup.string()
				})
			).required('Adicione pelo menos uma tecnologia.'),
			website: 		    Yup.string().matches(urlRegExp, 'Formato de Url inválida!').nullable(),
      open_source: 	  Yup.string().matches(urlRegExp, 'Formato de Url inválida!').nullable(),
      banner:         Yup.string().required('Imagem de banner obrigatória.'),
			images: 	      Yup.array().of(
				Yup.object().shape({
					path: Yup.string()
				})
			)
    });

    await schema.validate(data, {
      abortEarly: false // Abosrtar logo no primeiro erro que encontrar
    });

    // Criar a tabela. case já é uma palavra reservada seu idiota
    const caseRepository = getRepository(Case);

    const _case = caseRepository.create(data);  // Criando a tabela
    await caseRepository.save(_case); // Salvando a tabela no banco de dados

    console.log(_case);

    // 201 mostra que algo foi criado e deu certo
		return response.status(201).json(_case);
	},


	/**
	 * Listar todos os cases
	 */
	async list(  request: Request, response: Response  ) {

    const caseRepository = getRepository(Case);

    const cases = await caseRepository.find({
      // Quais relações da entidade devem ser carregadas.
      relations: [
        'technologies',
        'images'
      ]
    });

    return response.status(200).json(caseView.renderMany(cases));
	},


	/**
	 * Monstrar um case específico através de um id ou retornar um erro caso seja passado um id inválido.
	 */
	async show(  request: Request, response: Response  ) {

    const { id } = request.params;
    const caseRepository = getRepository(Case);

    const _case = await caseRepository.findOneOrFail(id, {
      relations: [
        'technologies',
        'images'
      ]
    });

    return response.status(200).json(caseView.render(_case));

	},


	/**
	 * Atualizar um case específico através de um id.
	 */
	async update(  request: Request, response: Response  ) {
		response.json({"mensagem": "update"})
	},


	/**
	 * Remover um case pelo id.
	 */
	async delete(  request: Request, response: Response  ) {
    const { id } = request.params;
    const caseRepository = getRepository(Case);

    const removedCase = await caseRepository.findOneOrFail(id, {select: ["title"]});

    await caseRepository.delete(id);

    return response.status(200).json({message: `Case: ${removedCase.title}, removido com sucesso!`});
	},
}

// export default CasesController;
