import { PartialType } from '@nestjs/mapped-types';
import { CreateConduitDto } from './create-conduit.dto';

export class UpdateConduitDto extends PartialType(CreateConduitDto) {}
