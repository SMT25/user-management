import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  // other routes...
];

export const appConfig = [
  provideRouter(routes),
];
