import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Calendario } from './calendario/calendario';


@Component({
  selector: 'app-principal',
  imports: [CommonModule, FormsModule, Calendario],
  standalone:true,
  templateUrl: './principal.html',
  styleUrls: ['./principal.css'],
})
export class Principal {
  

  tarefas: string[] = [];
  novaTarefa: string = '';
  criando: boolean = false;

  // Abre a caixa de criação
  abrir() {
    this.criando = true;
  }

  // Fecha a caixa de criação
  fechar() {
    this.criando = false;
  }

  // Adiciona nova tarefa
  addFuncao() {
    const tarefa = this.novaTarefa.trim();
    if (tarefa !== '') {
      this.tarefas.push(tarefa);
      this.novaTarefa = '';
      this.criando = false;
    }
  }

  // Edita tarefa existente
  editTask(index: number) {
    const nvtexto = prompt('Editar tarefa:', this.tarefas[index]);
    if (nvtexto !== null && nvtexto.trim() !== '') {
      this.tarefas[index] = nvtexto.trim();
    }
  }

  // Remove tarefa
  deleteTask(index: number) {
    this.tarefas.splice(index, 1);
  }
}

