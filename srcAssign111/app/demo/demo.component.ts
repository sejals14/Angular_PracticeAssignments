import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArithmeticService } from '../arithmetic.service';


@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers : [ArithmeticService],
})

export class DemoComponent
{
  additionResult: number = 0;
  subtractionResult: number = 0;

  constructor(private arithmeticService: ArithmeticService) {
    this.performOperations();
  }

  performOperations() {
    const num1 = 10;
    const num2 = 5;

    this.additionResult = this.arithmeticService.Add(num1, num2);
    this.subtractionResult = this.arithmeticService.Sub(num1, num2);
  }
}
