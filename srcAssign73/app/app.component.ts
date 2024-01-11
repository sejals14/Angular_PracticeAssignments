import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  public Name: string = "Marvellous Infosystems";

  changeCase(type: string) {
    if (type === 'upper') {
      this.Name = this.Name.toUpperCase();
    } else if (type === 'lower') {
      this.Name = this.Name.toLowerCase();
    }
  }
}
