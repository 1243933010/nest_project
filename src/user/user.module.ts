import { MiddlewareConsumer, Module,NestModule, RequestMethod } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import {LoggerMiddleware } from '../logger/logger.middleware'
import {User} from './entities/user.entity'
import {TypeOrmModule} from '@nestjs/typeorm'
@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
  exports:[UserService]
})

export class UserModule implements NestModule  {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('v1/user')
  }
}
