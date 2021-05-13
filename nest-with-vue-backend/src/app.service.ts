import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '[OK] NestJS Back-end is ready';
  }
}
