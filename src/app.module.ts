import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { UserService } from './user/user.service';
import { CatsService } from './cats/cats.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AppController, CatsController],
  providers: [AppService, UserService, CatsService],
})
export class AppModule {}
