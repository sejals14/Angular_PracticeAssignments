import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCompFailure]',
  standalone: true
})
export class CompFailureDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.changeTextColor('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeTextColor('black');
  }

  private changeTextColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }

}
