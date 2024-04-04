import { Component } from '@angular/core';


interface Itask{
  id: number;
  title:string;
  description:string;
  status:boolean;
  date:Date | string;
}
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})



export class TodoListComponent {
  title: string = ''; // Declare title property
  description: string ='';
  date :string=new Date().toLocaleDateString();
  todos: Itask[] = [];
  
//TODO handel valdiations 
//TODO clear date feild after summit
  addTodo() {
    if (this.title.trim() !== ''&&this.description.trim() !== '') {
      this.todos.push({
        id: new Date().getTime(), title: this.title, description: this.description,
        status: false,
        date: this.date
      });
      this.title = ''; 
      this.description = ''; 
    }
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
