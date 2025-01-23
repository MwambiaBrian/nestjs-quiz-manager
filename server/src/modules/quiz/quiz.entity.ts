import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity("quizes")
export class Quiz extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: "The quiz identifier"
  })
  id: number;

  @Column({
    type: "varchar"
  })
  title: string;

  @Column({
    type:"text"
  })
  description: string;
}
