import { Component } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { TodoItem } from '../../interfaces/todo';
import { RouterLink } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
   todoList: TodoItem [] = [];
   newTask:string = '';


   addTask() {
      if(this.newTask.trim() !== '') {
        const newTodoItem : TodoItem = {
          id: Date.now(),
          task: this.newTask,
          completed: false
        }
        this.todoList.push(newTodoItem);
        console.log(this.todoList);
        
      }
    }

    toggleComplete(index: number) {
      console.log(index);
      this.todoList[index].completed = ! this.todoList[index].completed
      console.log(this.todoList);
      
    }
    deleteTask(id: number) {
      this.todoList = this.todoList.filter(item => item.id !== id);
    }

}
