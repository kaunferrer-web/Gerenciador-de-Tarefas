import { Component, Input, OnChanges, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-produtividade',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produtividade.html',
  styleUrls: ['./produtividade.css'],
})
export class Produtividade implements OnChanges {

  @Input() pendente = 0;
  @Input() andamento = 0;
  @Input() concluida = 0;

  @ViewChild('pieCanvas', { static: true }) pieCanvas!: ElementRef;
  private chart!: Chart;

  ngOnChanges() {
    this.renderChart();
  }

  renderChart() {
    const data = [this.pendente, this.andamento, this.concluida];

    if (this.chart) {
      this.chart.data.datasets[0].data = data;
      this.chart.update();
      return;
    }

    this.chart = new Chart(this.pieCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Pendente', 'Em andamento', 'Concluída'],
        datasets: [
          {
            data,
            backgroundColor: ['#E0E0E0', '#FFD166', '#7B61FF']
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
}
