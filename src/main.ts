import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const PORT: number = parseInt(process.env.PORT ?? '3000', 10);
  const HOST: string = process.env.HOST ?? 'localhost';

  app.setGlobalPrefix('api/v1.0');

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Elementos API')
    .setVersion('1.0.0')
    .setDescription('API REST para la gestión de elementos, construida con NestJS y TypeScript.')
    .setContact('Soporte API', '', 'soporte@ejemplo.com')
    .addServer(`http://${HOST}:${PORT}`, 'Servidor de desarrollo')
    .addTag('Elementos', 'Operaciones sobre elementos')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(PORT, HOST);
  console.log(`✅ Servidor corriendo en http://${HOST}:${PORT}`);
  console.log(`📖 Documentación Swagger en http://${HOST}:${PORT}/api-docs`);
}

bootstrap();
