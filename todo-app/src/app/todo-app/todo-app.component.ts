import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todoitem';
import { Model } from '../model';


@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {
  name:string = "";
  displayAll:boolean = false;
  constructor() { 
    this.name = this.model.name;
  }

  ngOnInit(): void {
  }

  model = new Model();

  addItem(elName:any){
    if(elName.value != ""){
      this.model.items.push({description:elName.value, action:false});
      elName.value = '';
    }
    else{
      alert('Enter Information. Do not leave it blank.');
    }
  }

  getItem(){
    if(this.displayAll){
      return this.model.items
    }
    return this.model.items.filter(item => !item.action);
  }

  getCount(){
    return this.model.items.filter(item => item.action).length;
  }

}
