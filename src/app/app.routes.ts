import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { Principal } from './components/principal/principal';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: Principal }
];