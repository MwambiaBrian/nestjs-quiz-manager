import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from '../dto/CreateQuizDto/CreateQuizDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quiz } from '../entities/quiz.entity';
import { QuizRepository } from '../repositories/quiz.repository';

@Injectable()
export class QuizService {
  private quizzes = [];
  constructor(private readonly quizRepository: QuizRepository) {}

  async createQuiz(createQuizDto: CreateQuizDto) {
    const quiz = await this.quizRepository.create(createQuizDto);
    return await this.quizRepository.save(quiz);
  }

  findAll() {
    return this.quizRepository.find();
  }
  // createQuiz(createQuizDto: CreateQuizDto) {
  //   const newQuiz = { id: Date.now(), ...createQuizDto };
  //   this.quizzes.push(newQuiz);
  //   return newQuiz;
  // }

  // getAllQuizzes() {
  //   return this.quizzes;
  // }
  async getQuizById(id: number) {
    return await this.quizRepository.findOne({
      where: { id }, //Correctly pass the condition to find by ID
      relations: ['questions'],
    });
  }
}
