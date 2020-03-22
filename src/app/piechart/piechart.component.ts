import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html'
})
export class PieChartComponent implements OnInit {
  constructor() {
    axios.get('http://localhost:3000/suv')
      .then(response => {
        this.suv = response.data.sales.length;
        // this.suv = this.suv.data.sales.length;
        // console.log('data');
        // console.log(this.suv);
      });
    axios.get('http://localhost:3000/sedan')
      .then(response => {
        this.sedan = response.data.sales.length;
        // this.sedan = this.sedan.data.sales.length;
        // console.log('data');
        // console.log(this.sedan);
      });
    axios.get('http://localhost:3000/hackback')
      .then(response => {
        this.hackback = response.data.sales.length;
        // this.hackback = this.hackback.data.sales.length;
        // console.log('data');
        // console.log(this.hackback);
      });
    }

  suv: number = 4;
  sedan: number = 10;
  hackback: number = 5;
  // Pie
  // tslint:disable-next-line: member-ordering
  num1: any = 10; num2: any = 20; num3: any = 40;
  // tslint:disable-next-line: member-ordering
  public pieChartLabels: string[] = ['HachBack', 'Sedan', 'SUV'];
  // tslint:disable-next-line: member-ordering
  public pieChartData: number[] = [this.hackback, this.sedan, this.suv];
  public pieChartType = 'pie';

  ngOnInit() {
    axios.get('http://localhost:3000/suv')
      .then(response => {
        this.suv = response.data.sales.length;
        // console.log('data');
        // console.log(this.suv);
      });
    axios.get('http://localhost:3000/sedan')
      .then(response => {
        this.sedan = response.data.sales.length;
        // console.log('data');
        // console.log(this.sedan);
      });
    axios.get('http://localhost:3000/hackback')
      .then(response => {
        this.hackback = response.data.sales.length;
        // console.log('data');
        // console.log(this.hackback);
      });
  }

  // events
  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }
}
