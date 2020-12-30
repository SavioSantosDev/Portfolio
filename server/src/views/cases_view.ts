import Case from '../models/Case';
import Technologie from "../models/Technologie";
import Image from "../models/Image";


const technologiesView = {
  /**
   * Retornar um array com todas as tecnologias sem o id.
   */
  renderMany(technologies: Technologie[]) {
    return technologies.map(technologie => technologie.technologie);
  }
}


const imagesView =  {
  /**
   * Retonar um objeto com uma imagem apenas
   */
  render(image: Image) {
    return {
      id: image.id,
      url: `http://localhost:3000/uploads/${image.path}`
    };
  },

  /**
   * Retonar todas as imagens
   */
  renderMany(images: Image[]) {
    return images.map(image => this.render(image));
  }
};


export default {

  /**
   * Retornar dados de um único case
   */
  render(_case: Case) {
    return {
      id: _case.id,
      title: _case.title,
      genre: _case.genre,
      description: _case.description,
      website: _case.website,
      open_source: _case.open_source,
      banner: _case.banner,
      technologies: technologiesView.renderMany(_case.technologies),
      images: imagesView.renderMany(_case.images)
    };
  },

  /**
   * Utilizar o método render para retonar um array com todos os cases do banco.
   */
  renderMany(_cases: Case[]) {
      return _cases.map(_case => this.render(_case));
  }
};
