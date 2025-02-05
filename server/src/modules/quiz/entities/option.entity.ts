import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { Quiz } from '../entities/quiz.entity';
import { Question } from './question.entity';

@Entity('options')
export class Option extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
  })
  text: string;

  @Column({
    type: 'boolean',
  })
  isCorrect: boolean

 @ManyToOne(() => Question, (question)=>question.options)
  question: Question
}
