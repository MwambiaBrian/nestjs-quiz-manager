import { Quiz } from 'src/modules/quiz/entities/quiz.entity';
import { Injectable } from '@nestjs/common';

import { CreateQuestionDto } from '../dto/CreateQuestionDto/CreateQuestionDto';
import { QuestionRepository } from '../repositories/question.repository';
import { Question } from '../entities/question.entity';

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

  async findQuestionById(id: number): Promise<Question> {
    return await this.questionRepository.findOne({
      where: { id }, //Correctly pass the condition to find by ID
      relations: ['options', 'quiz'],
    });
  }
}
