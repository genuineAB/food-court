import { Module } from '@nestjs/common';
import { BrandsController } from './brands.controller';
import { BrandsService } from './brands.service';

@Module({
  imports: [],
  controllers: [BrandsController],
  providers: [BrandsService],
})
export class AddonModule {}
