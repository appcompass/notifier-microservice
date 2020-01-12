import { AppService } from './app.service';

import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('notifier.status')
  getStatus() {
    return this.appService.getStatus();
  }

  @MessagePattern('notifier.send.email')
  sendEmail(@Payload() payload: any) {
    return this.appService.send(payload);
  }
}
