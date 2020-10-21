import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './shared/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




// components
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';

import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { DateWidgetComponent } from './components/date-widget/date-widget.component';
import { MaterialModule } from "./shared/material.module";
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { LoginComponent } from './components/login/login.component'



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    EmployeesTableComponent,
    ContactsComponent,
    DashboardComponent,
    DoughnutChartComponent,
    PieChartComponent,
    BarChartComponent,
    DateWidgetComponent,
    NewEmployeeComponent,
    LoginComponent,
  ],

  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
    FlexLayoutModule,
    ChartsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
