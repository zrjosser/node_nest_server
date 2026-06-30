import { ApiProperty } from '@nestjs/swagger';

export class ElementoDto {
  @ApiProperty({
    description: 'Identificador único del elemento',
    example: 1,
  })
  id!: number;

  @ApiProperty({
    description: 'Nombre del elemento',
    example: 'Elemento Uno',
  })
  nombre!: string;

  @ApiProperty({
    description: 'Descripción del elemento',
    example: 'Descripción del primer elemento',
  })
  descripcion!: string;

  @ApiProperty({
    description: 'Indica si el elemento está activo',
    example: true,
  })
  activo!: boolean;
}

export class ElementosResponseDto {
  @ApiProperty({ example: true })
  success!: boolean;

  @ApiProperty({ example: 5 })
  total!: number;

  @ApiProperty({ type: [ElementoDto] })
  data!: ElementoDto[];
}
