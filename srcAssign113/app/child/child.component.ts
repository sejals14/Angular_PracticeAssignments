import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
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
