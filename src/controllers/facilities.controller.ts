import { Controller, Get, Query } from '@nestjs/common';
import { FindFacilitiesDto } from 'src/core/dto/find-facilities-dto';

@Controller('facilities')
export class FacilitiesController {
  @Get()
  findAll(@Query() query: Partial<FindFacilitiesDto>): string {
    return `This action returns all facilities with this query: ${query.limit} ${query.country}`;
  }
}
