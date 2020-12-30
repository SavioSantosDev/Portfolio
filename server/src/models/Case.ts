import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";

import Image from "./Image";
import Technologie from "./Technologie";

@Entity('cases')
export default class Case {

  @PrimaryGeneratedColumn('increment')
  id: number;

  /**
   * Título do principal do case
   */
  @Column()
  title: string;

  /**
   * Gênero do case ou subtitulo.
   */
  @Column()
  genre: string;

  /**
   * Descrição completa do projeto
   */
  @Column()
  description: string;

  /**
   * Tecnologias utilizadas para contrução do case/projeto
   */
  @OneToMany(() => Technologie, technologie => technologie.case, {
    cascade: ['insert', 'update']
  })
  @JoinColumn()
  technologies: Technologie[];

  /**
   * Se o website já estiver no ar, este será o link
   */
  @Column({ nullable: true })
  website: string;

  /**
   * Se for de código aberto adicionar o link para o github
   */
  @Column({ nullable: true })
  open_source: string;

  /**
   * Imagem principal do projeto. A que será exibida como destaque.
   */
  @Column()
  banner: string;

  /**
   * Todas as outras imagens se for o caso.
   */
  @OneToMany(() => Image, image => image.case, {
    cascade: ['insert', 'update']
  })
  @JoinColumn()
  images: Image[];
}
