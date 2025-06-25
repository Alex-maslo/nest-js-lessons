import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TablesService } from './tables.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { Table } from './entities/table.entity';
import { ResponseTableDto } from './dto/response-table.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Tables')
@Controller('tables')
export class TablesController {
  constructor(private readonly tablesService: TablesService) {}

  @ApiOperation({ summary: 'Create table' })
  @ApiResponse({
    status: 201,
    type: ResponseTableDto,
  })
  @Post()
  async create(@Body() createTableDto: CreateTableDto): Promise<Table> {
    return await this.tablesService.create(createTableDto);
  }

  @Get()
  async findAll(): Promise<ResponseTableDto[]> {
    return await this.tablesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Table> {
    return await this.tablesService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTableDto: UpdateTableDto,
  ): Promise<Table> {
    return await this.tablesService.update(+id, updateTableDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.tablesService.remove(+id);
  }
}
