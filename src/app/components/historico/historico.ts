import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService, Tarefa } from '../../services/tarefa-service';

@Component({
  selector: 'app-historico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historico.html',
  styleUrls: ['./historico.css']
})
export class Historico {
  constructor(public tarefaService: TarefaService) {}

  // excluir do histórico permanentemente
  apagar(index: number) {
    if (!confirm('Apagar este registro do histórico?')) return;
    this.tarefaService.removerHistorico(index);
  }

  // opcional: restaurar ao quadro de tarefas
  restaurar(index: number) {
    this.tarefaService.restaurarDoHistorico(index);
  }

  get historico(): Tarefa[] {
    return this.tarefaService.getHistorico();
  }
}

