import { Module } from '@nestjs/common';
import { UploadFileService } from './upload-file.service';
import { UploadFileController } from './upload-file.controller';
import {MulterModule} from '@nestjs/platform-express'
import { diskStorage } from 'multer';
import { extname, join } from 'path';

@Module({
  imports:[MulterModule.register({
    storage:diskStorage({
      destination:join(__dirname,'../images'),
      filename:(_,file,callback)=>{
        // console.log(new Date().getTime(),extname(file.originalname),'---')
        const fileName = `${new Date().getTime()+ extname(file.originalname)}`;
        return callback(null,fileName);
      }
    })
  })],
  controllers: [UploadFileController],
  providers: [UploadFileService]
})
export class UploadFileModule {}
