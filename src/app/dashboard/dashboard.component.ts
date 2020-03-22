import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: any;
  totalrev = 0;
  constructor() {
    axios.get('http://localhost:3000/')
    .then(response => {
      this.data = response;
      this.data = this.data.data.sales;
      this.data.forEach(element => {
        this.totalrev = this.totalrev + element.mrpin_lacs;
      });
      console.table(this.data);
    })
    .catch(err => {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

}
