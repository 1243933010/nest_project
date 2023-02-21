import { Controller, Get, Post, Body, Patch, Param, Delete,Request,Query,Headers,HttpCode,Req,Res ,Session, Version, Header} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as svgCaptcha from 'svg-captcha';
// import session from 'express-session';

// @Controller('user')

@Controller({
  path:'user',
  version:'1'
})

export class UserController {
  constructor(private readonly userService: UserService) {}

  
  @Post()
  create(@Body('name') createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.userService.create(createUserDto);
  }

  
  @Get('verification')
  verification(@Req() req,@Res() res,@Session() session){
    const captcha = svgCaptcha.create({
      size:4,
      fontSize:50,
      width:100,
      height:34,
      background:'#cc9966'
    })
    session.code = captcha.text;
    res.type('image/svg+xml');
    res.setHeader("Access-Control-Allow-Credentials",true);
   res.setHeader("Access-Control-Allow-Origin","http://127.0.0.1:5173/");
    res.send(captcha.data);
    // return captcha.data;
  }


 @Post('userLogin')
 userLogin(@Body() body:{code:string},@Session() session){
  // console.log(body,'---',session)
  // if(body.code?.toLocaleLowerCase()!==session.code.toLocaleLowerCase()){
  //   return{code:400,message:'验证码错误'};
  // }
  return{message:'验证码正确'}
 }

  @Get()
  findAll(@Query() query) {
    return {
      code:'200',
      message:query.name
    }
    // return this.userService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: string ,@Headers('cookie') headers:any) {
    console.log(id,headers)
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
