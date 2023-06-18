import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { FacilitiesController } from './controllers/facilities.controller';
import { AppService } from './services/app.service';
import { FacilitiesService } from './services/facilities.service';

@Module({
  imports: [],
  controllers: [AppController, FacilitiesController],
  providers: [AppService, FacilitiesService],
})
export class AppModule {}
