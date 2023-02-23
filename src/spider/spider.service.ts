import { Injectable } from '@nestjs/common';
import { CreateSpiderDto } from './dto/create-spider.dto';
import { UpdateSpiderDto } from './dto/update-spider.dto';
import axios from 'axios';
import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class SpiderService {
  create(createSpiderDto: CreateSpiderDto) {
    return 'This action adds a new spider';
  }

  async findAll() {
    let index = 0;
    const next = '下一页';
    const baseUrl: string = 'https://www.jpmn5.com';
    let urls:string[] = [];
    const getCosplay = async () => {
       await axios.get(`${baseUrl}/Cosplay/Cosplay10772${index ? '_' + index : ''}.html`,{timeout:500000}).then(async html => {
        const $ = cheerio.load(html.data);
        const page = $('.article-content .pagination a').map(function () {
          return $(this).text();
        }).toArray();
        $('.article-content p img').each( function () {
          urls.push(baseUrl + $(this).attr('src'))
        })
        console.log(index)
        if (page.includes(next)&&index<=3) {
            index++;
            await getCosplay();
        }
      })
    }
    await getCosplay()
    console.log('---');
    this.writeFile(urls);
    return urls;
  }

  writeFile(urls:string[]){
    urls.forEach(async(val,ind)=>{
      const buffer = await axios.get(val,{responseType:'arraybuffer'}).then(res=>res.data);
      const ws = fs.createWriteStream(path.join(__dirname,'../cos','/cos'+new Date().getTime()+'.jpg'));
      ws.write(buffer)
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} spider`;
  }

  update(id: number, updateSpiderDto: UpdateSpiderDto) {
    return `This action updates a #${id} spider`;
  }

  remove(id: number) {
    return `This action removes a #${id} spider`;
  }
}
