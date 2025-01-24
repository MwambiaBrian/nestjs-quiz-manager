import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './quiz.entity';
import { QuizRepository } from './quiz.repository';
import { Question } from './question.entity';
import { QuestionService } from './question.service';
import { QuestionRepository } from './question.repository';
import { QuestionController } from './question.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz, Question])],
  controllers: [QuizController, QuestionController],
  providers: [QuizService, QuestionService, QuestionRepository, QuizRepository],
})
export class QuizModule {}
