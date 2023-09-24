import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { interval } from 'rxjs';

async function bootstrap() {
  interval(3000).subscribe(() => {
    console.log("New Log!")
  })

  const app = await NestFactory.create(AppModule);
  await app.listen(5000);
}
bootstrap();
