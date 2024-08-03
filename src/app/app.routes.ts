import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';
import { GetapiComponent } from './Api_Integration/getapi/getapi.component';
import { PostapiComponent } from './Api_Integration/postapi/postapi.component';

export const routes: Routes = [{
    path:"register", component: RegisterComponent
},
{
    path:"todo",component:TodoComponent
},
{
    path:"home",component:HomeComponent
},
{ 
   path:"getapi", component:GetapiComponent
},
{
  path:"postapi", component:PostapiComponent
},
{
    path:"",redirectTo:'register' ,pathMatch:'full'
}
    
];
