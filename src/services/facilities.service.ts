import { Injectable } from '@nestjs/common';
import { FindFacilitiesDto } from 'src/core/dto/find-facilities-dto';

@Injectable()
export class FacilitiesService {
  findAllFacilities(facilities: Partial<FindFacilitiesDto>): string {
    return `This action returns all facilities with this query: ${facilities.limit} ${facilities.country}`;
  }
}
