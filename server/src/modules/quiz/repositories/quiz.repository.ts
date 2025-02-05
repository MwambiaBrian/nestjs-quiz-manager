import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quiz } from '../entities/quiz.entity';

export class QuizRepository extends Repository<Quiz> {
  constructor(
    @InjectRepository(Quiz)
    private QuizRepository: Repository<Quiz>,
  ) {
    super(
      QuizRepository.target,
      QuizRepository.manager,
      QuizRepository.queryRunner,
    );
  }

  // sample method for demo purposes
  //   async findByEmail(email: string): Promise<UserEntity> {
  //     return await this.userRepository.findOneBy({ email }); // could also be this.findOneBy({ email });, but depending on your IDE/TS settings, could warn that userRepository is not used though. Up to you to use either of the 2 methods
  //   }

  // your other custom methods in your repo...
}
