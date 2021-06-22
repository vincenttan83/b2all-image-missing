import { Inject } from '@angular/core';
import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { CustomConfig, CustomConfigService } from './custom-config';
@Directive({
  selector: '[libImage]'
})
export class ImageDirective implements AfterViewInit {

  @Input() src: any;

  constructor(
    private imageRef: ElementRef,
    @Inject(CustomConfigService) private config: CustomConfig
  ) {
  }

  ngAfterViewInit(): void {
    const img = new Image();
    img.onload = () => {
      this.setImage(this.src);
    };

    img.onerror = () => {
      // Set a placeholder image
      this.setImage(this.config.imageDefaultPath);
    };

    img.src = this.src;
  }

  private setImage(src: string): void {
    this.imageRef.nativeElement.setAttribute('src', src);
  }

}
