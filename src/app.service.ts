import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'NEW !!! Hello World! x!!!222222!';
  }
}
