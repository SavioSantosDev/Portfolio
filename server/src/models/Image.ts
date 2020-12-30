import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import Case from './Case';

@Entity('case_images')
export default class Image {

  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Caminho relativo de cada imagem do case
   */
  @Column({ nullable: true })
  path: string;

  // Por algum motivo "case" não da certo
  @ManyToOne(() => Case, _case => _case.images)
  // @ManyToOne(() => Case, case => case.case_images)
  @JoinColumn({ name: 'caseId' })
  case: Case;
}
