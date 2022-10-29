import { Chart } from 'chart.js';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  constructor() { }
  @Input() chartX!: Array<string>
  @Input() chartY!: Array<number>
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart("line", {
      type: 'line',

      data: {
        labels: this.chartX,
        datasets: [
          {
            label: "USD Market History",

            data: this.chartY,
            backgroundColor: 'rgba(73, 242, 163,0.15)',
            borderColor: 'gray',
            borderWidth: 1,
            pointBackgroundColor: 'rgb(73, 242, 163)',
            pointBorderColor: 'white',
            fill: true,
            tension: 0.5,
            pointHoverBackgroundColor: 'rgb(21, 21, 21)'
          },
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        responsive: true,
        aspectRatio: 2.5,

      }
    })
  }

}