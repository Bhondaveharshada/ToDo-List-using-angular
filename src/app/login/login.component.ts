import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormBuilder,Validators,FormGroup } from '@angular/forms';
import { RouterModule ,Router } from '@angular/router';
import { LoginService  } from '../services/login.service';
import { response } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  userLoginForm:any= FormGroup
  loginData :any
  constructor(private _fb:FormBuilder,
    private loginservice:LoginService,
    private router:Router
  ){}
  
  ngOnInit(): void {
    this.userLoginForm = this._fb.group({
      email:['',[Validators.required,Validators.email]],
      password: ['',[Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$")]],
    })
}
login(){
  this.loginData =this.userLoginForm.value
  console.log(this.login);
  this.loginservice.loginUser(this.loginData).subscribe({
   next:(response:any)=>{
    localStorage.setItem('token',response.token)
    sessionStorage.setItem('isLogin',"true")
     console.log(response.token);
     alert(response.message)
     this.router.navigate(['/todo'])
     
   },error : (err : any)=>{
    if(err.status===401){
      alert(err.error.message)
      console.log(err.error.Error);
      
    }else{
    console.log(err);
    alert("Something Went Wrong! ensure u enterd valid data");
    }
  }
  })
 } 
 
 }
  