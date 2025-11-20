import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Calendario } from './calendario/calendario';
import { Produtividade } from '../produtividade/produtividade';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, FormsModule, Calendario, Produtividade],
  templateUrl: './principal.html',
  styleUrls: ['./principal.css'],
})
export class Principal {

  criando = false;
  novaTarefa: string = '';

  tarefas: {
    titulo: string,
    status: 'pendente' | 'andamento' | 'concluida'
  }[] = [];

  qtdPendente = 0;
  qtdAndamento = 0;
  qtdConcluida = 0;

  abrir() { 
    this.criando = true; 
  }

  fechar() { 
    this.criando = false; 
  }

  // Criar tarefa
  addFuncao() {
    const texto = this.novaTarefa.trim();
    if (texto === '') return;

    this.tarefas.push({
      titulo: texto,
      status: 'pendente'
    });

    this.novaTarefa = '';
    this.criando = false;

    this.atualizarContadores();
  }

  // editar a tarefa
  editTask(index: number) {
    const novoTexto = prompt('Editar tarefa:', this.tarefas[index].titulo);
    if (novoTexto !== null && novoTexto.trim() !== '') {
      this.tarefas[index].titulo = novoTexto.trim();
      this.atualizarContadores();
    }
  }

  // remover tarefa
  deleteTask(index: number) {
    this.tarefas.splice(index, 1);
    this.atualizarContadores();
  }

  // Alterar status da tarefa
  alterarStatus(index: number, novoStatus: 'pendente' | 'andamento' | 'concluida') {
    this.tarefas[index].status = novoStatus;
    this.atualizarContadores();
  }

  // Atualiza os valores do gráfico
  atualizarContadores() {
    this.qtdPendente = this.tarefas.filter(t => t.status === 'pendente').length;
    this.qtdAndamento = this.tarefas.filter(t => t.status === 'andamento').length;
    this.qtdConcluida = this.tarefas.filter(t => t.status === 'concluida').length;

    console.log('Contadores atualizados:', {
      pendente: this.qtdPendente,
      andamento: this.qtdAndamento,
      concluida: this.qtdConcluida
    });
  }
}
