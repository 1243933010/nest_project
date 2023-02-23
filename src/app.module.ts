import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { UploadFileModule } from './upload-file/upload-file.module';
import { ConduitModule } from './conduit/conduit.module';
import { LoginModule } from './login/login.module';
import { SpiderModule } from './spider/spider.module';

@Module({
  imports: [UserModule, UploadFileModule, ConduitModule, LoginModule, SpiderModule,
  TypeOrmModule.forRoot({
    type:'mysql',
    username:'root',
    password:'ChongShao123',
    host:'localhost',
    port:3306,
    database:'demo',
    entities:[__dirname + '/**/*.tntry{.ts.js}'],
    synchronize:true,
    retryDelay:500,
    retryAttempts:10,
    autoLoadEntities:true
  })],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
