import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ecf_competencies') // Точна назва таблиці в PostgreSQL
export class Competency {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 10 })
  competence_code: string;

  @Column({ type: 'varchar', length: 255 })
  competence_name: string;

  @Column({ type: 'text', nullable: true })
  description: string;
}
