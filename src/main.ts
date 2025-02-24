import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig,
    provideAnimations() // Add this line to provide animations
  ]
}).catch((err) => console.error(err));
