import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-getapi',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './getapi.component.html',
  styleUrl: './getapi.component.css'
})
export class GetapiComponent {
   userList:any[]=[]
  constructor(private http:HttpClient){

  }

  getAllusers(){
    
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
      
      this.userList = result
    });
  }

}
