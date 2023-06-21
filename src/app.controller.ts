import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('ken')
  @Header('Content-Type', 'text/html')
  getJson(): any {
    return { name: 'ken' };
  }
}
