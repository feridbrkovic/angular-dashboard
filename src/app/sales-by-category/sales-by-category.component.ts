import { Component } from '@angular/core';
import { ChartModule, Chart } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-category',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './sales-by-category.component.html',
  styleUrl: './sales-by-category.component.scss'
})
export class SalesByCategoryComponent {

  chart = new Chart({
    chart: {
      type: 'pie',
      height: 325,
      style: {
        fontFamily: 'Inter'
      },
    },
    title: {
      text: 'Sales by Category'
    },
    xAxis: {
      categories: [
        'Electronics',
        'Groceries',
        'Cosmetics',
        'Clothes',
        'Appliances',
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in %'
      }
    },
    series: [
     {
      type: 'pie',
      data: [
        {
          name: 'Electronics',
          y: 41.0,
          color: '#aa66cc',
        },
        {
          name: 'Groceries',
          y: 33.8,
          color: '#33b5e5',
        },
        {
          name: 'Cosmetics',
          y: 6.5,
          color: '#28c76f',
        },
        {
          name: 'Clothes',
          y: 15.2,
          color: '#ff9f43',
        },
      ]
     }
    ],
    credits: {
      enabled: false
    }
  })

  constructor() { }

  ngOnInit(): void {
  }
  
}
