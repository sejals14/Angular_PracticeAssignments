import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Child2Component } from './child/child.component';
import { NumberService } from './number.service';
import { StringService } from './string.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [NumberService, StringService]
})
export class AppComponent {
  title = 'Assign112';
}
