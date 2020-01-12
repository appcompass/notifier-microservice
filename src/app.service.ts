import { Injectable } from '@nestjs/common';
import { ConfigService } from './config.service';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}
  send(payload: any) {
    // TODO: Handle sending email.
    console.log(payload);
    return { payload };
  }

  getStatus() {
    return {
      serviceName: this.configService.get('npm_package_name'),
      gitHash: this.configService.get('npm_package_gitHead'),
      version: this.configService.get('npm_package_version')
    };
  }
}
