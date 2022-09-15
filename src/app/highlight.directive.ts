import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() color: string = 'yellow';

  constructor(private element: ElementRef, private renderer: Renderer2) {
    console.log(this.element.nativeElement)
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      this.color
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(
      this.element.nativeElement,
      'background-color'
    );
  }

}
