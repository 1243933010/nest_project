import { Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import {Repository,Like} from 'typeorm'
import {InjectRepository} from '@nestjs/typeorm'
import {Table} from './entities/table.entity'

@Injectable()
export class TableService {
  constructor(@InjectRepository(Table) private readonly table:Repository<Table>){}


  create(createTableDto: CreateTableDto) {
    // return 'This action adds a new table';
    const data = new Table();
    data.name = createTableDto.name;
    data.desc = createTableDto.desc;
    this.table.save(data);
    return {message:'添加成功'}
  }

 async findAll(query:{keyWord:string,page:number,pageSize:number}) {
    // console.log(query)
    const data = await this.table.find({
      where:{
        name:Like(`%${query.keyWord}%`)
      },
      skip:(query.page-1)*query.pageSize,
      take:query.pageSize
    })
    // console.log(data,'----')
    const total = await this.table.count({
      where:{
        name:Like(`%${query.keyWord}%`)
      }
    })
    return{
      data,total,page:Number(query.page),pageSize:Number(query.pageSize)
    }
  }

  async findOne(id: number) {
    const data = await this.table.createQueryBuilder()
    .where("table.id = :id",{id:id})
    .getOne();
    return{ ... data}
  }

  update(id: number, updateTableDto: UpdateTableDto) {
    return this.table.update(id,updateTableDto);
  }

  remove(id: number) {
    return this.table.delete(id);
  }
}
