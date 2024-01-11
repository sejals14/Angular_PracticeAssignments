import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  enteredText: string = '';
  enteredTextLength: number = 0;

  updateLength(event: any) {
    this.enteredText = event.target.value;
    this.enteredTextLength = this.enteredText.length;
  }
}
