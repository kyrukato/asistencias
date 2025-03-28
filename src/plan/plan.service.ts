import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Plan } from './entities/plan.entity';
import { DataSource, Repository } from 'typeorm';
import { find } from 'rxjs';

@Injectable()
export class PlanService {
  constructor(
    private readonly dataSource:DataSource,
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
    try {
      const planes = await this.planRepository.find();
      return planes;
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async findByStatus(status:boolean) {
    try {
      const planes = await this.planRepository.find({
        where:{
          active:status,
        }
      });
      return planes;
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async findOne(id: number) {
    const plan = await this.planRepository.find({
      where:{
        id: id
      }
    })
    return plan;
  }

  async update(id: number, updatePlanDto: UpdatePlanDto) {
    const plan = this.findOne(id);
    if(!plan){
      throw new NotFoundException('El plan no fue encontrado');
    }
    const planupdate = await this.planRepository.preload({
      id: id,
      descripcion: updatePlanDto.descripcion
    })
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try{
      await queryRunner.manager.save(planupdate);
      await queryRunner.commitTransaction();
      await queryRunner.release();
      return planupdate;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      this.handleDBErrors(error);
    }
  }

  async remove(id: number) {
    const plan = this.findOne(id);
    if(!plan){
      throw new NotFoundException('El plan no fue encontrado');
    }
    const planupdate = await this.planRepository.preload({
      id: id,
      active: false
    })
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try{
      await queryRunner.manager.save(planupdate);
      await queryRunner.commitTransaction();
      await queryRunner.release();
      return planupdate;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      this.handleDBErrors(error);
    }
  }

  private handleDBErrors(error:any){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    console.log(error);
    throw new InternalServerErrorException('Please check serverlogs');
  }
}
