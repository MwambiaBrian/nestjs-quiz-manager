import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORM } from './config/typeORM.config';

@Module({
  imports: [QuizModule, TypeOrmModule.forRoot(typeORM)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
