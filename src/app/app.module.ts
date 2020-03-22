import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { HelloComponent } from './hello.component';
import { ChartsModule } from 'ng2-charts';
// import { PieChartComponent } from './piechart/piechart';
import { PieChartComponent } from './piechart/piechart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ChartsModule ],
  declarations: [ AppComponent, PieChartComponent, BarchartComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
