import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendario.html',
  styleUrl: './calendario.css',
})
export class Calendario implements OnInit {
  mesAno: string = '';
  diasDaSemana: string[] = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
  datas: Date = new Date();
  diasDoMes: any[] = [];
  ngOnInit() {
    this.atualizarCalendario();
  }

  atualizarCalendario(){
    const ano = this.datas.getFullYear();
    const mes = this.datas.getMonth();
    const primeiroDia = new Date(ano, mes, 1);
    const ultimoDia = new Date(ano, mes + 1, 0);
    const diaTotal = ultimoDia.getDate();
    const primeiroDiaIndex = primeiroDia.getDay();
    const ultimoDiaIndex = ultimoDia.getDay();

    this.mesAno = this.datas.toLocaleString('pt-BR', { 
      month: 'long', 
      year: 'numeric' 
    });

    this.diasDoMes = [];

    const diasAnterior = primeiroDiaIndex === 0 ? 6 : primeiroDiaIndex - 1;
    for (let i = diasAnterior; i > 0; i--) {
      const prevDate = new Date(ano, mes, 0 - i + 1);
      this.diasDoMes.push({
        dia: prevDate.getDate(),
        ativo: false,
        hoje: false
      });
    }

    const hoje = new Date();
    for (let i = 1; i <= diaTotal; i++) {
      const date = new Date(ano, mes, i);
      const ehHoje = date.toDateString() === hoje.toDateString();
      this.diasDoMes.push({
        dia: i,
        ativo: true,
        hoje: ehHoje
      });
    }

    const diasProximo = ultimoDiaIndex === 0 ? 0 : 7 - ultimoDiaIndex;
    for (let i = 1; i <= diasProximo; i++) {
      this.diasDoMes.push({
        dia: i,
        ativo: false,
        hoje: false
      });
    }

  }
  mesAnterior() {
    this.datas.setMonth(this.datas.getMonth() - 1);
    this.atualizarCalendario();
  }
  proximoMes() {
    this.datas.setMonth(this.datas.getMonth() + 1);
    this.atualizarCalendario();
  }
}
