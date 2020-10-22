import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from './services/auth/auth.service';
import { User } from './shared/User.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dashboard';
  userLogged:boolean = true;
 

  constructor(private location:Location,private auth:AuthService){
  
  }

  ngOnInit(){
    
   
  }
}
