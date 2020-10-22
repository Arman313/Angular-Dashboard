import { Injectable } from '@angular/core';
import {Router } from '@angular/router';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from '../../shared/User.model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:User;
  isLogged:boolean = false;

  constructor(private router:Router,private afAuth: AngularFireAuth) {

    this.afAuth.authState.subscribe((user)=>{
      if(user){
        localStorage.setItem('user',JSON.stringify(user));
      }else{
        localStorage.setItem('user',null);
      }
    })
   }

   async login(email:string,password:string){

    let result = await this.afAuth.signInWithEmailAndPassword(email,password);
    this.router.navigate(['/dashboard']);
    this.isLogged = true;
   }
}
