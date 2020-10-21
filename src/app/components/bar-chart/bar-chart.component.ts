import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label,Color } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})

export class BarChartComponent implements OnInit {

  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartOptions: ChartOptions = {
    legend: {
      position: 'bottom',
    },
    responsive: true,
    maintainAspectRatio : false,
  };
  public barChartColors: Color[] = [
    { backgroundColor: '#025562' },
    { backgroundColor: '#1C2C36' },
    { backgroundColor: '#6EBA8C' },
    { backgroundColor: '#B9F2A1' },
  ]
  // temporary data replace with dynamic data from API
  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 46, 27, 9], label: 'Series B' }
  ];

  constructor() { }

  ngOnInit() {
  }

}