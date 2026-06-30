import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ElementosService } from './elementos.service';
import { ElementosResponseDto } from './dto/elemento.dto';

@ApiTags('Elementos')
@Controller('elementos')
export class ElementosController {
  constructor(private readonly elementosService: ElementosService) {}

  @Get()
  @ApiOperation({ summary: 'Obtiene la lista de elementos', description: 'Retorna una lista completa de todos los elementos disponibles.' })
  @ApiResponse({ status: 200, description: 'Lista de elementos obtenida exitosamente', type: ElementosResponseDto })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  getElementos(): ElementosResponseDto {
    const data = this.elementosService.getAll();

    return {
      success: true,
      total: data.length,
      data,
    };
  }
}
