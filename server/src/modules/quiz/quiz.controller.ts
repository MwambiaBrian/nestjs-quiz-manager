import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/CreateQuizDto/CreateQuizDto';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}
  @Post()
  async createQuiz(@Body() createQuizDto: CreateQuizDto) {
    return this.quizService.createQuiz(createQuizDto);
  }

  @Get()
  async getAllQuizzes() {
    return this.quizService.findAll();
  }
  @Get(':id')
  async getQuizById(@Param('id') id: number) {
    return this.quizService.getQuizById(id);
  }
}
