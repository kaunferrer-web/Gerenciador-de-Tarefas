import { Component } from '@angular/core';
import { FormsModule,} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone:true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  // kauan: parte inicial do login//

  nome: string = "";
  email: string = "";
  senha: string = "";
  confirmaSenha: string = "";

  constructor(private router:Router){}

  mostrandoLogin: boolean = true;
  
  alternarFormulario(): void {
    this.mostrandoLogin = !this.mostrandoLogin;
  }

  //ademir: condições do login e cadastro //

  fazerLogin() {
  const usuarioSalvo = localStorage.getItem('usuario');

  if (usuarioSalvo) {
    // para transformar o usuario que vai ser lido como txt em js //
    const usuario = JSON.parse(usuarioSalvo);

    if (usuario.email === this.email && usuario.senha === this.senha) {
      alert("SEJA BEM VINDO!!");
      this.router.navigate(['/home']);
      return;
    } else {
      alert('Email ou senha incorretos!');
      return;
    }
  } else {
    alert('Nenhum usuário cadastrado!');
    return;
  }
}



  fazerCadastro() {
    
    //Ademir: nao tava funcionando por conta da logica nas condicionais//
    if (!this.nome || !this.email || !this.senha || !this.confirmaSenha) {
      alert("Preencha todas as informações");
      return;
    }
    if (!this.email.includes('@') || !this.email.includes('.com')){
      alert("INFORME UM E-MAIL VALIDO, Ex: algo@gmail.com");
      return;
    }
    if(this.senha !== this.confirmaSenha) {
      alert("AS SENHAS NÃO ESTÃO IGUAIS");
      return;
    }
    const usuario ={
      nome: this.nome,
      email: this.email,
      senha: this.senha
    };
    //ademir: para salvar no localStorage
    
    localStorage.setItem('usuario', JSON.stringify(usuario));
    alert("Cadastro confirmado!! Seja bem vindo, "+ this.nome)
      
    this.nome = '';
    this.email = '';
    this.senha = '';
    this.confirmaSenha = '';

    this.mostrandoLogin = true;
}
}
