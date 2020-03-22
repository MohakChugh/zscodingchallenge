import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  data: any;
  constructor() {
    this.requester();
  }

  requester() {
    axios.get('http://localhost:3000/mrpsedan').then(res => console.log(res.data.sales.length) )
    axios.get('http://localhost:3000/mrpsuv').then(res => console.log(res.data.sales.length))
    axios.get('http://localhost:3000/mrphackback').then(res => console.log(res.data.sales.length))
  }

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public mbarChartLabels: string[] = ['Delhi', 'Bangalore', 'Mumbai'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105,159,177,0.2)',
      borderColor: 'rgba(105,159,177,1)',
      pointBackgroundColor: 'rgba(105,159,177,1)',
      pointBorderColor: '#fafafa',
      pointHoverBackgroundColor: '#fafafa',
      pointHoverBorderColor: 'rgba(105,159,177)'
    },
    {
      backgroundColor: 'rgba(77,20,96,0.3)',
      borderColor: 'rgba(77,20,96,1)',
      pointBackgroundColor: 'rgba(77,20,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,20,96,1)'
    }
  ];
  public barChartData: any[] = [
    { data: [8,1,0 ], label: 'HatchBack' },
    { data: [2, 2, 0], label: 'SUV' },
    { data: [2, 0,2], label: 'Sedan' }

  ];

  ngOnInit(): void {
  }

  // events
  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }

  public randomize(): void {
    const data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      (Math.random() * 100),
      Math.round(Math.random() * 100),
      (Math.random() * 100),
      Math.round(Math.random() * 100)];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }
}
