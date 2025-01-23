import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto/create-quiz.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quiz } from './quiz.entity';

@Injectable()
export class QuizService {
  private quizzes = [];
  constructor(
    @InjectRepository(Quiz)
    private quizRepository: Repository<Quiz>,
  ) {}

  createQuiz(createQuizDto: CreateQuizDto) {
    const quiz = this.quizRepository.create(createQuizDto);
    return this.quizRepository.save(quiz);
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
  getQuizById(id: string) {
    return this.quizzes.find((quiz) => quiz.id === +id);
  }
}
