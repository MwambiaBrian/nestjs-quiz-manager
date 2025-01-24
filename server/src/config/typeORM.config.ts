import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Question } from 'src/modules/quiz/question.entity';
import { Quiz } from 'src/modules/quiz/quiz.entity';

export const typeORM: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'quizmanager',
  entities: [Quiz, Question],
  synchronize: true,
};
