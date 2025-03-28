import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Grupo } from './entities/grupo.entity';
import { Repository } from 'typeorm';


@Injectable()
export class GrupoService {
  constructor(
    @InjectRepository(Grupo)
    private readonly grupoRepository: Repository<Grupo>,
  ) {}

  async create(createGrupoDto: CreateGrupoDto) {
    try {
      const grupo = this.grupoRepository.create(createGrupoDto);
      await this.grupoRepository.save(grupo);
      return grupo;
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async findAll(): Promise<Grupo[]> {
    return await this.grupoRepository.find();
  }

  async findOne(id: number): Promise<Grupo> {
    const grupo = await this.grupoRepository.findOne({ where: { id } });
    if (!grupo) {
        throw new NotFoundException(`Grupo con ID ${id} no encontrado`);
    }
    return grupo;
  }

  async findOneByNombre(nombre: string): Promise<Grupo> {
    const grupo = await this.grupoRepository.findOne({ where: { nombre } });
    if (!grupo) {
        throw new NotFoundException(`Grupo con nombre "${nombre}" no encontrado`);
    }
    return grupo;
  }

  async update(id: number, updateGrupoDto: UpdateGrupoDto): Promise<Grupo> {
    const grupo = await this.findOne(id);
    Object.assign(grupo, updateGrupoDto);
    try {
        return await this.grupoRepository.save(grupo);
    } catch (error) {
        this.handleDBErrors(error);
    }
  }

  async remove(id: number): Promise<void> {
    const grupo = await this.findOne(id);
    await this.grupoRepository.remove(grupo);
  }

  private handleDBErrors(error:any){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    console.log(error);
    throw new InternalServerErrorException('Please check serverlogs');
  }

}
