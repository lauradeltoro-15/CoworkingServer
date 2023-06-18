import { Controller, Get, Query } from '@nestjs/common';
import { FindFacilitiesDto } from 'src/core/dto/find-facilities-dto';
import { FacilitiesService } from 'src/services/facilities.service';

@Controller('facilities')
export class FacilitiesController {
  constructor(private readonly facilitieService: FacilitiesService) {}

  @Get()
  findAll(@Query() query: Partial<FindFacilitiesDto>): string {
    return this.facilitieService.findAllFacilities(query);
  }
}
