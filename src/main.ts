import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';
import { ConfigService } from './config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  app.connectMicroservice({
    transport: Transport.NATS,
    options: {
      url: configService.get('NATS_URL'),
      queue: 'notifier'
    }
  });

  await app.startAllMicroservicesAsync();
}
bootstrap();
