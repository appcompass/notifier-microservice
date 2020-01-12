import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  send(payload: any) {
    // TODO: Handle sending email.
    console.log(payload);
    return { payload };
  }
}
