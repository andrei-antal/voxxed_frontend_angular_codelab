import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImageFallback]'
})
export class ImageFallbackDirective {
  @Input() ngiMovieImageFallback = 'assets/noImage1.jpg';

  @HostListener('error')
  setImage() {
    this.el.nativeElement.src = this.ngiMovieImageFallback;
  }
  constructor(private el: ElementRef) {}
}
