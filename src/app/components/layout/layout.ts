import { Tarefa, TarefaService } from './../../services/tarefa-service';
import { Component } from '@angular/core';
import { Produtividade } from '../produtividade/produtividade';
import { Calendario } from '../principal/calendario/calendario';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [Produtividade, Calendario, RouterLink, RouterOutlet],
  standalone: true,
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

  //Ademir: construtor para as atividades e a tualização do grafico de acordo com as task 
  constructor(private Tarefa: TarefaService) {}

  get tarefas(){
    return this.Tarefa.getTarefas();
  }

  get pendente() {
    return this.tarefas.filter(t => t.status === 'pendente').length;
  }

  get andamento() {
    return this.tarefas.filter(t => t.status === 'andamento').length;
  }

  get concluida() {
    return this.tarefas.filter(t => t.status === 'concluida').length;
  }

}
