import { AppService } from './app.service';

import { Controller } from '@nestjs/common';
import {
  MessagePattern,
  Payload,
  Ctx,
  RedisContext
} from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('notifier.send.*')
  sendEmail(@Payload() payload: any, @Ctx() context: RedisContext) {
    console.log(context);
    return this.appService.send(payload);
  }
}
