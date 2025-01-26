import { OptionRepository } from './../repositories/option.repository';
import { CreateOptionDto } from './../dto/options/create-option.dto';
import { Quiz } from 'src/modules/quiz/entities/quiz.entity';
import { Injectable } from '@nestjs/common';

import { CreateQuestionDto } from '../dto/CreateQuestionDto/CreateQuestionDto';
import { QuestionRepository } from '../repositories/question.repository';
import { Question } from '../entities/question.entity';

@Injectable()
export class OptionService {
  constructor(private readonly optionRepository: OptionRepository) {}
  //New question
  async createOption(option: CreateOptionDto, question: Question) {
    const newOption = await this.optionRepository.save({
      text: option.text,
      isCorrect: option.isCorrect,
    });
    question.options = [...question.options, newOption];
    await question.save();
    return newOption;
  }
}
