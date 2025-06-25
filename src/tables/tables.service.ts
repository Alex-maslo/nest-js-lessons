import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Table } from './entities/table.entity';

@Injectable()
export class TablesService {
  constructor(
    @InjectRepository(Table)
    private readonly tableRepository: Repository<Table>,
  ) {}

  async create(createTableDto: CreateTableDto): Promise<Table> {
    const newTable = this.tableRepository.create(createTableDto);
    return this.tableRepository.save(newTable);
  }

  async findAll(): Promise<Table[]> {
    return this.tableRepository.find();
  }

  async findOne(id: number): Promise<Table> {
    const table = await this.tableRepository.findOneBy({ id });
    if (!table) {
      throw new NotFoundException('Not Found');
    }
    return table;
  }

  async update(id: number, updateTableDto: UpdateTableDto): Promise<Table> {
    await this.tableRepository.update(id, updateTableDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.tableRepository.delete(id);
  }
}
