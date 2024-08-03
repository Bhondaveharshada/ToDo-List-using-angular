import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { log } from 'console';
import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common';
import { takeLast } from 'rxjs';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [RouterModule, FormsModule, HomeComponent, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  taskstring: string = "";
  arr: any[] = [];
  // editing:boolean = false;
  //status:string ="";
  button = "Edit";
  checked = false;
  index!: number
  isEdit: boolean = false

  constructor() {
    const localTasks = localStorage.getItem('tasklist');
    if (localTasks) {
      this.arr = JSON.parse(localTasks);
    }
  }
  save() {
    if (this.taskstring) {
      console.log(this.taskstring);
      this.arr.push({ taskname: this.taskstring, iscompleted: false, iseditable: false })
      //HomeComponent.h_array = this.arr;
      console.log(this.arr);
      //this.status = "In progress";
      this.taskstring = "";
      HomeComponent.h_array = this.arr
      // const localusers = localStorage.getItem("tasklist")
      // if(localusers !=null){
      //   const users = JSON.parse(localusers)
      //   users.push(this.arr)
        
      //   localStorage.setItem('tasklist',JSON.stringify(users))
        
      // }else{
      //   const users =[]
      //   users.push(this.arr)
      //   localStorage.setItem('tasklist',JSON.stringify(users))
      // }
      this.updateLocalStorage()
      
      

    }
    else {
      console.log('taskstring is empty or undifines');
    }
  }
  editTask(index: number, inputref: HTMLInputElement) {
    //this.arr[index].iseditable = true;

    this.isEdit = true
    
    
    this.arr[index].taskname = inputref.value;
    this.taskstring = this.arr[index].taskname;
    //inputref.value=''
    this.index = index
    this.updateLocalStorage();
  }
  toggle(index:number){
    this.arr[index].iseditable = true;
  }
  anotherEdit() {
    this.arr[this.index].taskname = this.taskstring
    this.isEdit = false
    this.arr[this.index].iseditable = false;
    const users = this.arr[this.index]
    localStorage.setItem('tasklist',JSON.stringify(users))
    
    this.index = 1
    this.taskstring = ''
    this.updateLocalStorage();
  }
  deleteTask(index: number) {
    if (confirm("do you want to delete this task")) {
      this.arr.splice(index, 1);
      this.updateLocalStorage()
    }


  }
  // updateEdit(index: number) {
  //   this.arr[index].iseditable = false;

  // }
  ischecked(index: number) {
    this.arr[index].iscompleted = !this.arr[index].iscompleted;
    console.log(this.arr);
    this.updateLocalStorage()


  }
  updateLocalStorage() {
    localStorage.setItem('tasklist', JSON.stringify(this.arr));
  }


}
