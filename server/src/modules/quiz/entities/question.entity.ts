import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Quiz } from '../entities/quiz.entity';
import { Option } from './option.entity';

@Entity('questions')
export class Question extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'The question identifier',
  })
  id: number;

  @Column({
    type: 'varchar',
  })
  question: string;
  @ManyToOne(() => Quiz, (quiz) => quiz.questions, { onDelete: 'CASCADE' })
  quiz: Quiz;

  @OneToMany(() => Option, (option) => option.question)
  options: Option[];
}
