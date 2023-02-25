import { Controller, Get, Post, Body, Patch, Param, Delete, Query,Res,Req } from '@nestjs/common';
import { TableService } from './table.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';


@Controller({path:'table',version:'1'})
export class TableController {
  constructor(private readonly tableService: TableService) {}

  @Post()
  create(@Body() createTableDto: CreateTableDto) {
    return this.tableService.create(createTableDto);
  }

  @Get()
  findAll(@Query() query:{keyWord:string,page:number,pageSize:number}) {
    console.log(query)
    return this.tableService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tableService.findOne(+id);
  }

  @Get('detail/:id')
  searchOne(@Param('id') param) {
    return this.tableService.findOne(+param);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTableDto: UpdateTableDto) {
    return this.tableService.update(+id, updateTableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tableService.remove(+id);
  }
}
