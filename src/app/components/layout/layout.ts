import { Component } from '@angular/core';
import { Produtividade } from '../produtividade/produtividade';
import { Calendario } from '../principal/calendario/calendario';
import { RouterLink, RouterOutlet } from '@angular/router';

interface Tarefa {
  titulo: string;
  data?: string;
  status: 'pendente' | 'andamento' | 'concluida';
}


@Component({
  selector: 'app-layout',
  imports: [Produtividade, Calendario, RouterLink, RouterOutlet],
  standalone: true,
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  tarefas: Tarefa[] = [];
  datatask: string[] = [];
  novaTarefa: string = '';
  novaData: string = '';
  criando: boolean = false;
  statustarefas: {
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
  const titulo = this.novaTarefa.trim();
  const data = this.novaData.trim();

  if (titulo === '') return;

  this.tarefas.push({
    titulo,
    data: data || undefined,
    status: 'pendente'
  });

  this.novaTarefa = '';
  this.novaData = '';
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
