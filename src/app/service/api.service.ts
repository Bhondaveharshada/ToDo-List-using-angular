import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getAllDept(){
   return this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment");
  }

  saveNewDept(obj:any){
    return this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",obj);
  }

  updateDept(obj:any){
    return this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment",obj)
  }
  
}

  