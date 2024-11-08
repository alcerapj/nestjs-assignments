import { Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('fibonacci/:n')
  fibonacci(@Param('n', ParseIntPipe)n: number){
    let seq = [];
    let a = 0, b = 1;

    for(let i = 0; i < n; i++){
      seq.push(a);
      [a, b] = [b, a +b];
    }return {sequence:seq};

  }

}
