import { Component, inject ,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { ApiService } from '../../service/api.service';
import { AlertComponent } from '../../reusableComponent/alert/alert.component';

@Component({
  selector: 'app-postapi',
  standalone: true,
  imports: [FormsModule,JsonPipe,AlertComponent],
  templateUrl: './postapi.component.html',
  styleUrl: './postapi.component.css'
})
export class PostapiComponent implements OnInit {
  http = inject(HttpClient)

constructor(private deptservice: ApiService){}

  departObj:any ={
    "departmentId":0,
    "departmentName":"",
    "departmentLogo":"",
  }
  deptList:any[]=[]

  ngOnInit(): void {
   this.getDepartment()   
  }

  /* onSave(){
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",this.departObj).subscribe((res:any)=>{
      if(res.result){
        alert("user created successfully")
        this.getDepartment()
      }else{
        alert(res.message)
      }
    })
  } */
 onSave(){
  this.deptservice.saveNewDept(this.departObj).subscribe((res:any)=>{
    if(res.result){
      alert("user created successfully")
      this.getDepartment()
    }else{
      alert(res.message)
    }
    this.departObj.departmentId = 0;
    this.departObj.departmentName = "";
    this.departObj.departmentLogo = ""
  })
 }

  onEdit(data:any){
    this.departObj = data;
  }

  onUpdate(){
    this.deptservice.updateDept(this.departObj).subscribe((res:any)=>{
      if(res.result){
        alert("user updated")
        this.getDepartment()
      }else{
        alert(res.message)
      }
      this.departObj = ""
        
    })
  }

  onDelete(id:number){
    this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId="+id).subscribe((res:any)=>{
      if(res.result){
        alert("user deleted")
        this.getDepartment()
      }else{
        alert(res.message)
      }
    })

  }

  // getDeapartment(){
  //   this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res:any)=>{
  //    this.deptList = res.data
  //   });
  // }

  getDepartment(){
    this.deptservice.getAllDept().subscribe((res:any)=>{
      this.deptList = res.data
    });
  }
}

