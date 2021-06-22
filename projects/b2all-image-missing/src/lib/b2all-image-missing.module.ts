import { ModuleWithProviders, NgModule } from '@angular/core';
import { ImageDirective } from './image.directive';

@NgModule({
  declarations: [
    ImageDirective
  ],
  imports: [
  ],
  exports: [
    ImageDirective,
  ]
})
export class B2allImageMissingModule {
  // assets/images/logos/b2all-solution/missing-image-logo.png
  static forRoot(defaultImagePath: string): ModuleWithProviders<B2allImageMissingModule> {
    return {
      ngModule: B2allImageMissingModule,
      providers: [{
        provide: 'defaultImagePath', useValue: defaultImagePath
      }]
    };
  }
}
