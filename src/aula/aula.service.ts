import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateAulaDto } from './dto/create-aula.dto';
import { UpdateAulaDto } from './dto/update-aula.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Aula } from './entities/aula.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AulaService {
  constructor(
    @InjectRepository(Aula)
    private readonly aulaRepository:Repository<Aula>,
  ){}
  async create(createAulaDto: CreateAulaDto) {
    try {
      const aula = this.aulaRepository.create(createAulaDto);
      await this.aulaRepository.save(aula);
      return aula;
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  findAll() {
    try {
      const aula= this.aulaRepository.find();
      return aula;
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async findOne(id: number) {
    try {
      const aula = await this.aulaRepository.find({
        where:{
          id: id,
        }
      })
      return aula;
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async update(id: number, updateAulaDto: UpdateAulaDto): Promise<Aula> {
    // Buscar el aula por ID
    const aula = await this.aulaRepository.findOne({ where: { id } });
    if (!aula) {
        throw new NotFoundException(`Aula con ID ${id} no encontrada`);
    }

    // Actualizar las propiedades del aula
    Object.assign(aula, updateAulaDto);

    try {
        // Guardar los cambios en la base de datos
        return await this.aulaRepository.save(aula);
    } catch (error) {
        this.handleDBErrors(error);
    }
}


  remove(id: number) {
    return `This action removes a #${id} aula`;
  }

  private handleDBErrors(error:any){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    console.log(error);
    throw new InternalServerErrorException('Please check serverlogs');
  }
}
