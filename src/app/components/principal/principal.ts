import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Calendario } from './calendario/calendario';
import { Produtividade } from '../produtividade/produtividade';
import { Router } from '@angular/router';

import { TarefaService, Tarefa } from '../../services/tarefa-service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, FormsModule, Calendario, Produtividade],
  templateUrl: './principal.html',
  styleUrls: ['./principal.css'],
})
export class Principal {
  novaTarefa = '';
  novaData = '';
  criando = false;

  qtdPendente = 0;
  qtdAndamento = 0;
  qtdConcluida = 0;

  constructor(private tarefaService: TarefaService, private router: Router) {}

  menuAberto: number | null = null;

  toggleMenu(i: number) {
    this.menuAberto = this.menuAberto === i ? null : i;
  }


  get tarefas(): Tarefa[] {
    return this.tarefaService.getTarefas();
  }

  abrir() { this.criando = true; }
  fechar() { this.criando = false; }

  addFuncao() {
    const titulo = this.novaTarefa.trim();
    const data = this.novaData.trim();
    if (!titulo) return;

    this.tarefaService.addTarefa({ titulo, data: data || undefined, status: 'pendente' });
    this.novaTarefa = '';
    this.novaData = '';
    this.criando = false;
    this.atualizarContadores();
  }

  editTask(index: number) {
    const novo = prompt('Editar tarefa', this.tarefas[index].titulo);
    if (!novo) return;
    this.tarefaService.editarTarefa(index, novo.trim());
    this.atualizarContadores();
  }

  // Mudar: ao remover, mover para histórico e navegar para a rota de histórico
  deleteTask(index: number) {
    const titulo = this.tarefas[index]?.titulo;
    if (!titulo) return;

    // mover para histórico (salva lá)
    this.tarefaService.moverParaHistorico(index);

    // atualizar contadores locais
    this.atualizarContadores();

    // navegar para histórico (rota absoluta; se preferir relativa, use outra forma)
    this.router.navigate(['/layout/historico']);
  }

  alterarStatus(index: number, novoStatus: Tarefa['status']) {
    this.tarefaService.mudarStatus(index, novoStatus);
    this.atualizarContadores();
  }

  atualizarContadores() {
    const list = this.tarefas;
    this.qtdPendente = list.filter((t: Tarefa) => t.status === 'pendente').length;
    this.qtdAndamento = list.filter((t: Tarefa) => t.status === 'andamento').length;
    this.qtdConcluida = list.filter((t: Tarefa) => t.status === 'concluida').length;
  }
}