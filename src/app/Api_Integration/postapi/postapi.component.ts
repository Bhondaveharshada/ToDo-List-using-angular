import { Component, inject ,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-postapi',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './postapi.component.html',
  styleUrl: './postapi.component.css'
})
export class PostapiComponent implements OnInit {
  http = inject(HttpClient)
  departObj:any ={
    "departmentId":0,
    "departmentName":"",
    "departmentLogo":"",
  }
  deptList:any[]=[]

  ngOnInit(): void {
   this.getDeapartment()   
  }

  onSave(){
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",this.departObj).subscribe((res:any)=>{
      if(res.result){
        alert("user created successfully")
      }else{
        alert(res.message)
      }
    })
  }

  getDeapartment(){
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res:any)=>{
     this.deptList = res.data
    });
  }
}

