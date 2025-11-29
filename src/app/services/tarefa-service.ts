import { Injectable } from '@angular/core';

export interface Tarefa {
  titulo: string;
  data?: string;
  status: 'pendente' | 'andamento' | 'concluida';
}

@Injectable({ providedIn: 'root' })
export class TarefaService {
  tarefas: Tarefa[] = [];
  historico: Tarefa[] = []; // armazenará tarefas movidas para histórico

  getTarefas(): Tarefa[] {
    return this.tarefas;
  }

  getHistorico(): Tarefa[] {
    return this.historico;
  }

  addTarefa(t: Tarefa) {
    this.tarefas.push(t);
  }

  editarTarefa(index: number, novoTitulo: string) {
    if (this.tarefas[index]) this.tarefas[index].titulo = novoTitulo;
  }

  removerTarefa(index: number) {
    if (index >= 0 && index < this.tarefas.length) this.tarefas.splice(index, 1);
  }

  mudarStatus(index: number, status: Tarefa['status']) {
    if (this.tarefas[index]) this.tarefas[index].status = status;
  }

  // Kauan: move tarefa do array de tarefas para o histórico
  moverParaHistorico(index: number) {
    if (index < 0 || index >= this.tarefas.length) return;
    const t = this.tarefas[index];

    this.historico.push({ ...t });
    this.tarefas.splice(index, 1);
  }

  // kauan: remover do histórico permanentemente
  removerHistorico(index: number) {
    if (index >= 0 && index < this.historico.length) this.historico.splice(index, 1);
  }

  // Kauan: restaurar do histórico para tarefas
  restaurarDoHistorico(index: number) {
    if (index < 0 || index >= this.historico.length) return;
    const t = this.historico[index];
    this.tarefas.push({ ...t });
    this.historico.splice(index, 1);
  }
}
