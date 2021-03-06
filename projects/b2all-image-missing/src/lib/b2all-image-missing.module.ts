import { ModuleWithProviders, NgModule } from '@angular/core';
import { CustomConfig, CustomConfigService } from './custom-config';
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
  static forRoot(config: CustomConfig): ModuleWithProviders<B2allImageMissingModule> {
    return {
      ngModule: B2allImageMissingModule,
      providers: [
        {
          provide: CustomConfigService, useValue: config
        }
      ]
    };
  }
}
