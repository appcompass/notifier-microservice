import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { ConfigService } from './config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  app.connectMicroservice({
    transport: Transport.REDIS,
    options: {
      url: configService.get('REDIS_URL')
    }
  });

  await app.startAllMicroservicesAsync();
}
bootstrap();
