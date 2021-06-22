import { InjectionToken } from '@angular/core';

export interface CustomConfig {
    imageDefaultPath: string;
}

export const CustomConfigService = new InjectionToken<CustomConfig>('CustomConfig');
