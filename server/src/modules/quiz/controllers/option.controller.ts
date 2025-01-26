import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UsePipes,
  ValidationPipe,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateOptionDto } from './../dto/options/create-option.dto';
import { OptionService } from './../services/option.service';
import { QuestionService } from '../services/question.service';

@Controller('question/option')
export class OptionController {
  constructor(
    private readonly optionService: OptionService,
    private readonly questionService: QuestionService,
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createOption(@Body() option: CreateOptionDto) {
    try {
      const question = await this.questionService.findQuestionById(
        option.questionId,
      );
      if (!question) {
        throw new NotFoundException(
          `Question with ID ${option.questionId} not found`,
        );
      }

      const createdOption = await this.optionService.createOption(
        option,
        question,
      );

      return {
        message: 'Option created successfully',
        data: createdOption,
      };
    } catch (error) {
      throw new InternalServerErrorException(
        `Failed to create option: ${error.message}`,
      );
    }
  }
}
