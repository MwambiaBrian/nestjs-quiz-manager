import { Quiz } from 'src/modules/quiz/entities/quiz.entity';
import { Injectable } from '@nestjs/common';

import { CreateQuestionDto } from '../dto/CreateQuestionDto/CreateQuestionDto';
import { QuestionRepository } from '../repositories/question.repository';

@Injectable()
export class QuestionService {
  constructor(private readonly questionRepository: QuestionRepository) {}
  //New question
  async createQuestion(question: CreateQuestionDto, quiz: Quiz) {
    const newQuestion = await this.questionRepository.save({
      question: question.question,
    });
    quiz.questions = [...quiz.questions, newQuestion];
    quiz.save();
    return newQuestion;
  }
}
