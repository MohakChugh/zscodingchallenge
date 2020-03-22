import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  data: any;
  constructor() {
    axios.get('http://localhost:3000/')
    .then(response => {
      this.data = response;
      this.data = this.data.data.sales;
      console.table(this.data);
    })
    .catch(err => {
      console.log(err);
    });
   }

  ngOnInit(): void {
  }

}
