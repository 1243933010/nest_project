import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {VersioningType} from '@nestjs/common'
import * as session from 'express-session'
import {Request,Response,NextFunction } from 'express'
import * as cors from 'cors';
import {NestExpressApplication} from '@nestjs/platform-express'
import { join } from 'path';
import {Respon} from './common/response'
import {HttpFilter} from './common/filter'

function MiddleWareAll(req:Request,res:Response,next:NextFunction){  //全局中间件
  console.log(`全局中间件:当前请求接口${req.originalUrl}`);
  next();
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);//添加NestExpressApplication的原因是为了下面的useStaticAssets方法
  app.enableVersioning({    //给当前所有接口添加版本前缀比如/v1
    type:VersioningType.URI
  })
  app.use(session({secret:'yueshaochong',rolling:true,name:'yueshaochong.sid',cookie:{maxAge:9999999}}));  //设置session参数
  // app.use(cors());//添加跨域
  app.useStaticAssets(join(__dirname,'images'),{ prefix:'/imgs'}) //给路径添加一个虚拟前缀
  app.useGlobalInterceptors(new Respon());  //全局响应拦截
  app.useGlobalFilters(new HttpFilter());   //全局异常过滤器
  app.use(MiddleWareAll);
  
  await app.listen(3002);
}
bootstrap();
