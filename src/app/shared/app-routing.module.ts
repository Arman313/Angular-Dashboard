import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesTableComponent } from '../components/employees-table/employees-table.component';
import { ContactsComponent } from '../components/contacts/contacts.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { NewEmployeeComponent } from '../components/new-employee/new-employee.component';


const routes: Routes = [
  {path:'',component:DashboardComponent,data:{title: 'Main'}},
  {path: 'new', component: NewEmployeeComponent ,data:{title: 'New Employee'}},
  {path:'employees',component:EmployeesTableComponent ,data:{title: 'Employees'}},
  {path:'contacts',component:ContactsComponent ,data:{title: 'Contacts'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
