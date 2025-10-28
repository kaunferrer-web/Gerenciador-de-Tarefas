import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  standalone:true, 
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email: string = '';
  senha: string = '';

  constructor(private router: Router) {} 

  onSubmit() {
    if (!this.email) {
      alert('Digite um e-mail!');
      return;
    }
    if (this.email.includes('@')) {
      this.router.navigate(['/home']);  
    } else {
      alert('E-mail inválido!');
    }
  }
}
