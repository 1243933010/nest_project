import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import {plainToInstance} from 'class-transformer'
import {validate} from 'class-validator'
import {HttpFilter} from '../common/filter'
@Injectable()
export class LoginPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    const DTO = plainToInstance(metadata.metatype,value);
    const errors =  await validate(DTO);
    console.log(errors);
    if(errors.length){
      console.log('===')
      throw new HttpException(errors,HttpStatus.BAD_REQUEST);
      // HttpFilter()
    }
    return value;
  }
}
