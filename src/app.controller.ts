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

  @Get('prime/:n')
  checkPrime(@Param('n') num: string): { isPrime: boolean } {
    const number = parseInt(num, 10);
    const isPrime = this.isPrime(number);
    return { isPrime };
  }
  
  private isPrime(n: number): boolean {
    if (n <= 1) return false;    
    if (n <= 3) return true;     
    if (n % 2 === 0 || n % 3 === 0) return false; 
    
   
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
  
    return true; 
  }
  
  @Get('factorial/:n')
  getFactorial(@Param('n') num: string): { factorial: number } {
    const number = parseInt(num, 10);
    const result = this.factorial(number);
    return { factorial: result };
  }
  
  private factorial(n: number): number {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  

}
