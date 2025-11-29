import { Routes } from '@angular/router';

import { Layout } from './components/layout/layout';
import { Principal } from './components/principal/principal';
import { LoginComponent } from './pages/login/login'; 
import { Historico } from './components/historico/historico';

const authGuard = () => {
  const estaLogado = true; 
  
  if (estaLogado) {
    return true;
  }
  return false;
};

export const routes: Routes = [

  { path: 'home', redirectTo: 'layout', pathMatch: 'full' }, 
  
  { path: '', component: LoginComponent },
  {
    path: 'layout', component: Layout, canActivate: [authGuard], children: [
      { path: 'home', component: Principal },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {path: 'historico', component: Historico}
    ]
  },
  

  { path: '**', redirectTo: 'layout' }
];
