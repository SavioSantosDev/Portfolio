import { Entity, ManyToOne, Column, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import Case from './Case';

@Entity('case_technologies')
export default class Technologie {

  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Uma das tecnologias utilizadas para o desenvolvimento do projeto
   */
  @Column()
  technologie: string;


  @ManyToOne(() => Case, _case => _case.technologies)
  @JoinColumn({ name: 'caseId' })
  case: Case;
}
