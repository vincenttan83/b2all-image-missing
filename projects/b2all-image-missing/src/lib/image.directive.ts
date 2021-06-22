import { Inject } from '@angular/core';
import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[libImage]'
})
export class ImageDirective implements AfterViewInit {

  @Input() src: any;

  constructor(
    private imageRef: ElementRef,
    @Inject('defaultImagePath') private defaultImagePath: string
  ) {
  }

  ngAfterViewInit(): void {
    const img = new Image();
    img.onload = () => {
      this.setImage(this.src);
    };

    img.onerror = () => {
      // Set a placeholder image
      this.setImage(this.defaultImagePath);
    };

    img.src = this.src;
  }

  private setImage(src: string): void {
    this.imageRef.nativeElement.setAttribute('src', src);
  }

}
