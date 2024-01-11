import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
  isPrime: boolean = false;

  constructor(private numberService: NumberService) {
    this.checkPrime();
  }

  checkPrime() {
    // Hardcoded value for demonstration purposes
    const num = 7;
    this.isPrime = this.numberService.ChkPrime(num);
  }
}
