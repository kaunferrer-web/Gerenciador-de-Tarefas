import { Routes } from '@angular/router';
import { Inicial } from './components/components/login/components/home/inicial';
import { LoginComponent } from './components/components/login/components/login/login';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: Inicial}
];
