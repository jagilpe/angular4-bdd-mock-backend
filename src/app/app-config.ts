import { environment } from '../environments/environment';
import { InjectionToken } from '@angular/core';

export interface AppConfig {
  apiEndpoint: string;
}

export const DEFAULT_APP_CONFIG: AppConfig = {
  apiEndpoint: environment.backendUrl
};

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
