import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Entry point for the application
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
