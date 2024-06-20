import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AddinClientService } from '@blackbaud/skyux-lib-addin-client';
import { SkyThemeService } from '@skyux/theme';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    SkyThemeService
  ]
};
