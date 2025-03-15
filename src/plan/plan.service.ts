import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Plan } from './entities/plan.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlanService {
  constructor(
    @InjectRepository(Plan)
    private readonly planRepository:Repository<Plan>,
  ){}

  async create(createPlanDto: CreatePlanDto) {
    try{
      const plan = this.planRepository.create(createPlanDto);
      await this.planRepository.save(plan);
      return plan;
    }
    catch(error){
      this.handleDBErrors(error);
    }
  }

  async findAll() {
    
  }

  async findOne(id: string) {
    const plan = await this.planRepository.find({
      where:{
        id: id
      }
    })
    return plan;
  }

  update(id: number, updatePlanDto: UpdatePlanDto) {
    return `This action updates a #${id} plan`;
  }

  remove(id: number) {
    return `This action removes a #${id} plan`;
  }

  private handleDBErrors(error:any){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    console.log(error);
    throw new InternalServerErrorException('Please check serverlogs');
  }
}
