import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsInt, Min } from 'class-validator';


export class CreateItemDto {
    @ApiProperty({ example: 'Bananas' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiPropertyOptional({ example: 'Cavendish bananas', description: 'Optional description of the item' })
    @IsOptional()
    @IsString()
    description: string;

    @ApiProperty({ example: 5, description: 'Needed quantity' })
    @IsInt()
    @Min(1)
    quantity: number;

}
