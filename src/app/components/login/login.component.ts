import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;


  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  onLogin(email,password){
 
    email = this.loginForm.get('email').value;
    password =  this.loginForm.get('password').value;

    this.authService.login(email,password);
  }

}
