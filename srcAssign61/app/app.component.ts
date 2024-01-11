import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: 
  `
    <label for="fname" class="blue-text">Marvellous Infosystems</label>
    <input type="text" id="fname" name="fname">
  `,
  styles: 
  [`
    .blue-text {
      color: blue;
    }
  `]
})
export class AppComponent {
  title = 'Assign61';
}
