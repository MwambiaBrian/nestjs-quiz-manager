import { OptionRepository } from './repositories/option.repository';
import { OptionController } from './controllers/option.controller';
import { OptionService } from './services/option.service';
import { Option } from './entities/option.entity';
import { Module } from '@nestjs/common';
import { QuizController } from './controllers/quiz.controller';
import { QuizService } from './services/quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { QuizRepository } from './repositories/quiz.repository';
import { Question } from './entities/question.entity';
import { QuestionService } from './services/question.service';
import { QuestionRepository } from './repositories/question.repository';
import { QuestionController } from './controllers/question.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz, Question, Option])],
  controllers: [QuizController, QuestionController, OptionController],
  providers: [
    QuizService,
    QuestionService,
    OptionService,
    QuestionRepository,
    OptionRepository,
    QuizRepository,
  ],
})
export class QuizModule {}
