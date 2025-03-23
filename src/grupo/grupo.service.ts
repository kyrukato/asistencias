import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Grupo } from './entities/grupo.entity';
import { Repository } from 'typeorm';
import { Carrera } from 'src/carrera/entities/carrera.entity';
import { Periodo } from 'src/periodo/entities/periodo.entity';

@Injectable()
export class GrupoService {
  constructor(
    @InjectRepository(Grupo)
    private readonly grupoRepository: Repository<Grupo>,

    @InjectRepository(Carrera)
    private readonly carreraRepository: Repository<Carrera>,

    @InjectRepository(Periodo)
    private readonly periodoRepository: Repository<Periodo>,
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
    return await this.grupoRepository.find({ relations: ['carrera', 'periodo'] });
  }

  async findOne(id: string): Promise<Grupo> {
    const grupo = await this.grupoRepository.findOne({ where: { id }, relations: ['carrera', 'periodo'] });
    if (!grupo) throw new NotFoundException('Grupo no encontrado');
    return grupo;
  }

  async update(id: string, updateGrupoDto: UpdateGrupoDto): Promise<Grupo> {
    const grupo = await this.findOne(id);

    if (updateGrupoDto.carreraId) {
      const carrera = await this.carreraRepository.findOne({ where: { id: updateGrupoDto.carreraId } });
      if (!carrera) throw new NotFoundException('Carrera no encontrada');
      grupo.carrera = carrera;
    }

    if (updateGrupoDto.periodoId) {
      const periodo = await this.periodoRepository.findOne({ where: { id: updateGrupoDto.periodoId } });
      if (!periodo) throw new NotFoundException('Periodo no encontrado');
      grupo.periodo = periodo;
    }

    Object.assign(grupo, updateGrupoDto);
    return await this.grupoRepository.save(grupo);
  }

  async remove(id: string): Promise<void> {
    const grupo = await this.findOne(id);
    await this.grupoRepository.remove(grupo);
  }

  async findByCarrera(carreraId: string): Promise<Grupo[]> {
    return await this.grupoRepository.find({
      where: { carrera: { id: carreraId } },
      relations: ['carrera', 'periodo'],
    });
  }

  async findByPeriodo(periodoId: string): Promise<Grupo[]> {
    return await this.grupoRepository.find({
      where: { periodo: { id: periodoId } },
      relations: ['carrera', 'periodo'],
    });
  }

  async findByProfesor(profesorId: string): Promise<Grupo[]> {
    return await this.grupoRepository
      .createQueryBuilder('grupo')
      .innerJoin('grupo.materiaxgrupo', 'materiaxgrupo')
      .where('materiaxgrupo.profesor.id = :profesorId', { profesorId })
      .getMany();
  }

  private handleDBErrors(error:any){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    console.log(error);
    throw new InternalServerErrorException('Please check serverlogs');
  }

  async findAllWithMateriaCount(): Promise<any[]> {
    return await this.grupoRepository
      .createQueryBuilder('grupo')
      .leftJoinAndSelect('grupo.materiaxgrupo', 'materiaxgrupo')
      .select('grupo.id', 'id')
      .addSelect('grupo.nombre', 'nombre')
      .addSelect('COUNT(materiaxgrupo.id)', 'totalMaterias')
      .groupBy('grupo.id')
      .getRawMany();
  }

  
}
