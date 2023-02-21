import {Injectable,NestInterceptor,CallHandler} from '@nestjs/common';
import { map, Observable } from 'rxjs';

interface Data<T>{
    data:T
}

@Injectable()
export class Respon<T> implements NestInterceptor{
        intercept(context, next: CallHandler):Observable<Data<T>>{
            
            return next.handle().pipe(map(data=>{
                return {
                    data: data?.data,
                    code:data.message?data.code:0,
                    message:data.message?data.message:'success'
                }
            }))
    }
}