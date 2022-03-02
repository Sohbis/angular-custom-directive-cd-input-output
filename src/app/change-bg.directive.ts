import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appChangeBg]',
})
export class ChangeBgDirective {
  @Input() defaultColor: string = 'transparent';
  @Input('appAdvancedBg') highlightColor: string = 'red';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    // this.el.nativeElement.style.backgroundColor = 'blue';
    this.backgroundColor = 'blue';
    // this.renderer.setStyle(this.el.nativeElement,'background-color','blue')
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }
}
