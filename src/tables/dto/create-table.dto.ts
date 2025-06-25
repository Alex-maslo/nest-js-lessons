import {
  IsNumber,
  IsOptional,
  IsString,
  Min,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTableDto {
  @ApiProperty({ example: 'дерев’яний', description: 'Тип столу' })
  @IsString()
  @MinLength(2)
  type: string;

  @ApiProperty({ example: 10 })
  @IsNumber()
  @Min(10)
  width: number;

  @ApiProperty({ example: 10 })
  @IsNumber()
  @Min(10)
  height: number;

  @ApiProperty({ example: true })
  @IsOptional()
  inStock: boolean;
}
