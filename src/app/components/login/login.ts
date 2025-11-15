import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  nome: string = "";
  email: string = "";
  senha: string = "";
  confirmaSenha: string = "";

  constructor(private router: Router) {}

  mostrandoLogin: boolean = true;

  alternarFormulario(): void {
    this.mostrandoLogin = !this.mostrandoLogin;
  }


  async fazerLogin() {
    const usuarioSalvo = localStorage.getItem('usuario');

    if (usuarioSalvo) {
      const usuario = JSON.parse(usuarioSalvo);

      if (usuario.email === this.email && usuario.senha === this.senha) {
        await Swal.fire({
          icon: 'success',
          title: 'BEM-VINDO DE VOLTA!',
          text: 'Olá ' + usuario.nome + '!',
          customClass: {
            popup: 'swal-alerta',
            confirmButton: 'swal-confirma'
          },
        });
        this.router.navigate(['/home']);
        return;
      } else {
        await Swal.fire({
          icon: 'error',
          title: 'Dados incorretos!',
          text: 'Informe um e-mail ou senha existente.',
          customClass: {
            popup: 'swal-alerta',
            confirmButton: 'swal-confirma'
          }
        });
        return;
      }
    } else {
      await Swal.fire({
        icon: 'error',
        title: 'Poxa...',
        text: 'Nenhum usuário cadastrado ainda.',
        customClass: {
          popup: 'swal-alerta',
          confirmButton: 'swal-confirma'
        }
      });
      return;
    }
  }

  async fazerCadastro() {
    if (!this.nome || !this.email || !this.senha || !this.confirmaSenha) {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha todas as informações!',
        customClass: {
          popup: 'swal-alerta',
          confirmButton: 'swal-confirma'
        }
      });
      return;
    }

    if (!this.email.includes('@') || !this.email.includes('.com')) {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Informe um e-mail válido!',
        footer: '<a href="#">exemplo: seuemail@gmail.com</a>',
        customClass: {
          popup: 'swal-alerta',
          confirmButton: 'swal-confirma'
        }
      });
      return;
    }

    if (this.senha !== this.confirmaSenha) {
      await Swal.fire({
        icon: 'error',
        title: 'Eita...',
        text: 'As senhas não coincidem!',
        customClass: {
          popup: 'swal-alerta',
          confirmButton: 'swal-confirma'
        }
      });
      return;
    }

    const usuario = {
      nome: this.nome,
      email: this.email,
      senha: this.senha
    };
    localStorage.setItem('usuario', JSON.stringify(usuario));

    await Swal.fire({
      icon: 'success',
      title: 'CADASTRO CONFIRMADO!',
      text: 'Seja bem-vindo, ' + this.nome + '!',
      customClass: {
        popup: 'swal-alerta',
        confirmButton: 'swal-confirma'
      }
    });

    this.nome = '';
    this.email = '';
    this.senha = '';
    this.confirmaSenha = '';
    this.mostrandoLogin = true;
  }
}
