import { Module } from '@nestjs/common';
import { SpiderService } from './spider.service';
import { SpiderController } from './spider.controller';
import {MulterModule} from '@nestjs/platform-express'
import { diskStorage } from 'multer';
import { extname, join } from 'path';

@Module({
  imports:[MulterModule.register({
    storage:diskStorage({
      destination:join(__dirname,'../cos'),  //用配置上传文件的方式先创建一个文件夹
      // filename:(_,file,callback)=>{
      //   // console.log(new Date().getTime(),extname(file.originalname),'---')
      //   const fileName = `${new Date().getTime()+ extname(file.originalname)}`;
      //   return callback(null,fileName);
      // }
    })
  })],
  controllers: [SpiderController],
  providers: [SpiderService]
})
export class SpiderModule {}
