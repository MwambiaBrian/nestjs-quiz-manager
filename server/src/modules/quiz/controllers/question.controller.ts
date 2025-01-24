import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { CreateQuizDto } from '../dto/CreateQuizDto/CreateQuizDto';
import { CreateQuestionDto } from '../dto/CreateQuestionDto/CreateQuestionDto';
import { QuestionService } from '../services/question.service';

@Controller('question')
export class QuestionController {
  constructor(
    private readonly questionService: QuestionService,
    private readonly quizService: QuizService,
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createQuestion(@Body() question: CreateQuestionDto) {
    const quiz = await this.quizService.getQuizById(question.quizId);
    return await this.questionService.createQuestion(question, quiz);
  }

  //   @Get()
  //   async getAllQuizzes() {
  //     return this.questionService.findAll();
  //   }
  //   @Get(':id')
  //   async getQuizById(@Param('id') id: string) {
  //     return this.questionService.getQuizById(id);
  //   }
}
