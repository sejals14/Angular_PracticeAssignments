import { Component } from '@angular/core';
import { StringService } from '../string.service';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {
  isPrime: boolean = false;
  capitalCount: number = 0;

  constructor(private numberService: NumberService, private stringService: StringService) {
    this.checkPrime();
    this.countCapital();
  }

  checkPrime() {
    const num = 7;
    this.isPrime = this.numberService.ChkPrime(num);
  }

  countCapital() {
    const str = 'HelloWorld';
    this.capitalCount = this.stringService.CountCapital(str);
  }
}
