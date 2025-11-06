import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  standalone:true,
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  // kauan: parte inicial do login//

  nome: string = "";
  email: string = "";
  senha: string = "";
  confirmaSenha: string = "";

  mostrandoLogin: boolean = true;
  router: any;

  alternarFormulario(): void {
    this.mostrandoLogin = !this.mostrandoLogin;
  }

  //ademir: condições do login e cadastro //

  fazerLogin(): void {
    const usuarioSalvo = localStorage.getItem('usuario');

    if (!usuarioSalvo) {
      alert('Nenhum usuario cadastrado!!');
      return;
    }
    //para transformar o usuario que vai ser lido como txt em js//
    const usuario = JSON.parse(usuarioSalvo);

    if (this.email === usuario.email && this.senha === usuario.senha) {
      alert('Seja bem vindo,' + usuario)      
    }
    else {
      alert('E-MAIL OU SENHA INCORRETA');
    }
  }


  fazerCadastro(): void {
    if (this.nome || this.email || this.senha || this.confirmaSenha) {
      alert("Preencha todas as informações")      
    }

    if (!this.email.includes('@') || this.email.includes('.com')){
      alert("INFORME UM E-MAIL VALIDO, Ex: algo@gmail.com")
    }
    if (this.senha !== this.confirmaSenha) {
      alert("AS SENHAS NÃO ESÃO IGUAIS");     
    }
    const usuario ={
      nome: this.nome,
      email: this.email,
      senha: this.senha
    };
    //para salvar no localStorage
    localStorage.setItem('usuario', JSON.stringify(usuario));
    alert("Cadastro confirmado. SEJA BEM VINDO!!")

    this.nome = this.email = this.senha = this.confirmaSenha = '';
    this.mostrandoLogin = true;

    if (this.email === usuario.email && this.senha === usuario.senha) {
      alert(`Seja bem-vindo, ` + usuario);
      this.router.navigate(['/home']);
    } else {
      alert('E-mail ou senha incorretos!');
  }
}
}
