import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlanService } from './plan.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';

@Controller('plan')
export class PlanController {
  constructor(private readonly planService: PlanService) {}

  @Post('create')
  create(@Body() createPlanDto: CreatePlanDto) {
    return this.planService.create(createPlanDto);
  }

  @Get('getAll')
  findAll() {
    return this.planService.findAll();
  }

  @Get(':status')
  findStatus(@Param('status') status:boolean){
    return this.planService.findByStatus(status);
  }

  @Get('getOne/id')
  findOne(@Param('id') id: string) {
    return this.planService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updatePlanDto: UpdatePlanDto) {
    return this.planService.update(id, updatePlanDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.planService.remove(id);
  }
}
