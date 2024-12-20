import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const corsOptions: CorsOptions = {
    origin: false,
    methods: 'GET,HEAD,PUT,POST,DELETE',
  };

  app.enableCors(corsOptions);
  await app.listen(8112);
}
bootstrap();
