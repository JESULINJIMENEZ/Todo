import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoItem } from '../../interfaces/todo';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todoList: TodoItem[] = [];
  newTask: string = '';

  constructor() {
    // Cargar las tareas desde localStorage al iniciar el componente
    this.loadTasks();
  }

  addTask() {
    if (this.newTask.trim() !== '') {
      const newTodoItem: TodoItem = {
        id: Date.now(),
        task: this.newTask,
        completed: false
      };
      this.todoList.push(newTodoItem);
      this.saveTasks();  // Guardar las tareas en localStorage
      console.log(this.todoList);
      this.newTask = '';
    }
  }

  toggleComplete(index: number) {
    this.todoList[index].completed = !this.todoList[index].completed;
    this.saveTasks();  // Guardar las tareas en localStorage después de marcar como completada
    console.log(this.todoList);
  }

  deleteTask(id: number) {
    this.todoList = this.todoList.filter(item => item.id !== id);
    this.saveTasks();  // Guardar las tareas en localStorage después de eliminar
  }

  // Guardar las tareas en localStorage
  saveTasks() {
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  // Cargar las tareas desde localStorage
  loadTasks() {
    const savedTasks = localStorage.getItem('todoList');
    if (savedTasks) {
      this.todoList = JSON.parse(savedTasks);
    }
  }
}
