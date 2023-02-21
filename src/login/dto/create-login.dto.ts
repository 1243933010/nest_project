import {IsNotEmpty,IsString,IsNumber,Length} from 'class-validator'
export class CreateLoginDto {
    @IsNotEmpty()
    @IsString()
    @Length(5,10,{message:'不能少于10个字符超过10个字符'})
    name:string;
    
    @IsNumber()
    password:number;
}
