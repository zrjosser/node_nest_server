import { Module } from '@nestjs/common';
import { ElementosModule } from './elementos/elementos.module';

@Module({
  imports: [ElementosModule],
})
export class AppModule {}
