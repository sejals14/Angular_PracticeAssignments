import { Component, Output, EventEmitter } from '@angular/core';
import {  } from 'node:stream';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() public sendDataToParent: EventEmitter <string> = new EventEmitter<string>();

  public sendData(inputText: string) {
    this.sendDataToParent.emit(inputText);
  }
}
