import { Routes } from '@angular/router';
import { LoginComponent } from './components/components/login/components/login/login';
import { Inicial } from './components/components/login/components/home/inicial';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: Inicial }
];
