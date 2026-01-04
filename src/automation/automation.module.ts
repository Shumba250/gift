import { Module } from '@nestjs/common';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [CommonModule],
  providers: [],
  exports: [ ],
})
export class AutomationModule {}
