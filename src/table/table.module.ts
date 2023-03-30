import { Module } from '@nestjs/common';
import { TableService } from './table.service';
import { TableController } from './table.controller';

import {Table} from './entities/table.entity'
import {Tags} from './entities/tag.entity'

import {TypeOrmModule} from '@nestjs/typeorm'

@Module({
  imports:[TypeOrmModule.forFeature([Table,Tags])],
  controllers: [TableController],
  providers: [TableService]
})
export class TableModule {}
