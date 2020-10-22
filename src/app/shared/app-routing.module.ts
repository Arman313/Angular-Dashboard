import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesTableComponent } from '../components/employees-table/employees-table.component';
import { ContactsComponent } from '../components/contacts/contacts.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { NewEmployeeComponent } from '../components/new-employee/new-employee.component';
import { LoginComponent } from '../components/login/login.component';


const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,data:{title: 'Main'}},
  {path:'signin',component:LoginComponent,data:{title: 'Signin'}},
  {path: 'new', component: NewEmployeeComponent ,data:{title: 'New employee'}},
  {path:'employees',component:EmployeesTableComponent ,data:{title: 'Employees'}},
  {path:'contacts',component:ContactsComponent ,data:{title: 'Contacts'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
