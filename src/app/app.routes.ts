import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { Principal } from './components/principal/principal';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: Principal }
];
