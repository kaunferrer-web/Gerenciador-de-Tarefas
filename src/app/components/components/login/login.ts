import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone:true,
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  mostrandoLogin: boolean = true;

  alternarFormulario(): void {
    this.mostrandoLogin = !this.mostrandoLogin;
  }

  fazerLogin(): void {
    console.log('Login realizado');
  }

  fazerCadastro(): void {
    console.log('Cadastro realizado');
  }
}
