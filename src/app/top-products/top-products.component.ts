import { Component } from '@angular/core';
import { ChartModule, Chart } from 'angular-highcharts';

@Component({
  selector: 'app-top-products',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './top-products.component.html',
  styleUrl: './top-products.component.scss',
})
export class TopProductsComponent {
  chart = new Chart({
    chart: {
      type: 'bar',
      height: 225,
      style: {
        fontFamily: 'Inter'
      },
    },
    title: {
      text: 'Top 3 Products',
    },
    xAxis: {
      categories: [
        'Lenova Thinkpad E15',
        'Nectar Orange Juice',
        'Axe Deodarant',
      ],
    },
    yAxis: {
      title: {
        text: '',
      },
    },
    series: [
      {
        type: 'bar',
        showInLegend: false,
        data: [
          {
            name: 'Lenova Thinkpad E15',
            y: 395,
            color: '#aa66cc',
          },
          {
            name: 'Nectar Orange Juice',
            y: 385,
            color: '#28c76f',
          },
          {
            name: 'Axe Deodarant',
            y: 275,
            color: '#ff9f43',
          },
        ],
      },
    ],
    credits: {
      enabled: false,
    },
  });

  constructor() {}

  ngOnInit(): void {}
}
