import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { RegisteredUsersComponent } from './registeredusers/registeredusers.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  {path :'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  {path: 'registeredusers', component: RegisteredUsersComponent},
  // other routes...
];

export const appConfig = [
  provideRouter(routes),
];
