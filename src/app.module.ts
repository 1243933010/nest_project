import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { UploadFileModule } from './upload-file/upload-file.module';
import { ConduitModule } from './conduit/conduit.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [UserModule, UploadFileModule, ConduitModule, LoginModule],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
