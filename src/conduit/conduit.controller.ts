import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, ParseUUIDPipe } from '@nestjs/common';
import { ConduitService } from './conduit.service';
import { CreateConduitDto } from './dto/create-conduit.dto';
import { UpdateConduitDto } from './dto/update-conduit.dto';
import * as uuid from 'uuid'


console.log(uuid.v4());  //7e36f4dc-ce45-4a0f-b220-0d58af3ab42a
@Controller('conduit')
export class ConduitController {
  constructor(private readonly conduitService: ConduitService) {}

  @Post()
  create(@Body() createConduitDto: CreateConduitDto) {
    return this.conduitService.create(createConduitDto);
  }

  @Get()
  findAll() {
    return {data:this.conduitService.findAll()}
  }

  @Get(':id')
  findOne(@Param('id',ParseUUIDPipe) id: string) {
    console.log(typeof id,id);
    return this.conduitService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConduitDto: UpdateConduitDto) {
    return this.conduitService.update(+id, updateConduitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.conduitService.remove(+id);
  }
}
