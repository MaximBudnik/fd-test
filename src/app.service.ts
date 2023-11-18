import { Injectable } from '@nestjs/common';
import { createClient } from 'redis';

@Injectable()
export class AppService {
  getHello(): string {
    return 'New World!';
  }

  async redis() {

    if (!process.env.REDIS_CLUSTER_IP) {
      return "NO REDIS_CLUSTER_IP"
    }

    const client = await createClient({ password: 'admin', url: `redis://${process.env.REDIS_CLUSTER_IP}` })
      .on('error', err => console.log('Redis Client Error', err))
      .connect();

    await client.set('key', 'TEST_REDIS');
    const value = await client.get('key');
    await client.disconnect();

    return value
  }
}
