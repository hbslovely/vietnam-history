import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch, HttpBackend } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TRANSLATE_HTTP_LOADER_CONFIG, TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Observable } from 'rxjs';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// AoT requires an exported function for factories
export function HttpLoaderFactory() {
  return new TranslateHttpLoader();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    importProvidersFrom(
      HttpClientModule,
      TranslateModule.forRoot({
        defaultLanguage: 'vi',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: []
        }
      })
    ),
    {
      provide: TRANSLATE_HTTP_LOADER_CONFIG,
      useValue: {
        prefix: './assets/i18n/',
        suffix: '.json',
      }
    },
    provideAnimationsAsync()
  ]
};
