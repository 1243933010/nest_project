import { Controller, Get, Post, Body, Patch, Param, Delete,UseInterceptors,UploadedFile,Res } from '@nestjs/common';
import { UploadFileService } from './upload-file.service';
import { CreateUploadFileDto } from './dto/create-upload-file.dto';
import { UpdateUploadFileDto } from './dto/update-upload-file.dto';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { join } from 'path';
import { Response } from 'express';
import {zip} from 'compressing'

@Controller({
  path:'upload-file',
  version:'1'
})
export class UploadFileController {
  constructor(private readonly uploadFileService: UploadFileService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file){
    console.log(file);
    return {
      
    }
  }


  @Get('export')
  downLoad(@Res() res:Response){
    const url = join(__dirname,'../images/1676882769020.png');
    res.download(url);
  }

  @Get('stream')
  async down(@Res() res:Response){
    const url = join(__dirname,'../images/1676882769020.png');
    const tarStream = new zip.Stream();
    await tarStream.addEntry(url);
    res.setHeader('Content-Type','application/octet/stream');
    res.setHeader('Content-Disposition','attachment;filename=yue' )
    tarStream.pipe(res);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.uploadFileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUploadFileDto: UpdateUploadFileDto) {
    return this.uploadFileService.update(+id, updateUploadFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uploadFileService.remove(+id);
  }
}
