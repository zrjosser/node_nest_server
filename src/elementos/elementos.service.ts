import { Injectable } from '@nestjs/common';
import { ElementoDto } from './dto/elemento.dto';

const elementos: ElementoDto[] = [
  {
    id: 1,
    nombre: 'Elemento Uno',
    descripcion: 'Descripción del primer elemento',
    activo: true,
  },
  {
    id: 2,
    nombre: 'Elemento Dos',
    descripcion: 'Descripción del segundo elemento',
    activo: true,
  },
  {
    id: 3,
    nombre: 'Elemento Tres',
    descripcion: 'Descripción del tercer elemento',
    activo: false,
  },
  {
    id: 4,
    nombre: 'Elemento Cuatro',
    descripcion: 'Descripción del cuarto elemento',
    activo: true,
  },
  {
    id: 5,
    nombre: 'Elemento Cinco',
    descripcion: 'Descripción del quinto elemento',
    activo: false,
  },
];

@Injectable()
export class ElementosService {
  /**
   * Retorna la lista completa de elementos (mock data).
   */
  getAll(): ElementoDto[] {
    return elementos;
  }
}
