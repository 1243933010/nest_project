import { Controller, Get, Post, Body, Patch, Param, Delete,Request,Query,Headers,HttpCode } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as svgCaptcha from 'svg-captcha';

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
  verification(){
    const Captcha = svgCaptcha.create({
      size:4,
      fontSize:50,
      width:100,
      height:34,
      background:'#cc9966'
    })
    return {
      code:'200',
      data:Captcha
    }
  }

  @Get()
  findAll(@Query() query) {
    console.log(query);
    return {
      code:'200',
      message:query.name
    }
    // return this.userService.findAll();
  }

  @Get(':id')
  // @HttpCode(404)
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
