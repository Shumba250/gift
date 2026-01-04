import { Module } from '@nestjs/common';
import { CommonController } from './v1/controllers/common.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [CommonController],
  providers: [],
  imports: [HttpModule],
  exports: [],
})
export class CommonModule {}
