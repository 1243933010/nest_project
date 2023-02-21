import { Module } from '@nestjs/common';
import { ConduitService } from './conduit.service';
import { ConduitController } from './conduit.controller';

@Module({
  controllers: [ConduitController],
  providers: [ConduitService]
})
export class ConduitModule {}
