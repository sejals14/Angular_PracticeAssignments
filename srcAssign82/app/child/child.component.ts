import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() messageFromParent : string = "";
  @Output() public sendDataToParent: EventEmitter<string> = new EventEmitter<string>();

  public sendDataToParentfun() {
    this.sendDataToParent.emit("Hello from Child");
  }
}
