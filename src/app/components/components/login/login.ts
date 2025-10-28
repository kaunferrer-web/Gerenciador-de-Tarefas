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

  constructor(private router: Router) {} // Injeta o roteador no componente

  onSubmit() {
    if (!this.email) {
      alert('Digite um e-mail!');
      return;
    }

    //  se tiver um e-mail válido,redireciona
    if (this.email.includes('@')) {
      this.router.navigate(['/home']);  // muda para a rota "home"
    } else {
      alert('E-mail inválido!');
    }
  }
}
