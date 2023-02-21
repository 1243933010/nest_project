import { Injectable } from '@nestjs/common';
import { CreateConduitDto } from './dto/create-conduit.dto';
import { UpdateConduitDto } from './dto/update-conduit.dto';

@Injectable()
export class ConduitService {
  create(createConduitDto: CreateConduitDto) {
    return 'This action adds a new conduit';
  }

  findAll() {
    return `This action returns all conduit`;
  }

  findOne(id: number) {
    return `This action returns a #${id} conduit`;
  }

  update(id: number, updateConduitDto: UpdateConduitDto) {
    return `This action updates a #${id} conduit`;
  }

  remove(id: number) {
    return `This action removes a #${id} conduit`;
  }
}
