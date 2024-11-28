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
  newTaskTitle: string = ''; // Nuevo campo para el título
  newTaskDescription: string = ''; // Nuevo campo para la descripción
  editingTaskIndex: number | null = null; // Índice de la tarea que está en edición

  constructor() {
    // Cargar las tareas desde localStorage al iniciar el componente
    this.loadTasks();
  }

  addTask() {
    if (this.newTaskTitle.trim() !== '' && this.newTaskDescription.trim() !== '') {
      if (this.editingTaskIndex !== null) {
        // Si estamos editando una tarea, actualizamos la tarea
        this.todoList[this.editingTaskIndex].title = this.newTaskTitle;
        this.todoList[this.editingTaskIndex].description = this.newTaskDescription;
        this.editingTaskIndex = null; // Desactivamos el modo de edición
      } else {
        // Si no estamos editando, creamos una nueva tarea
        const newTodoItem: TodoItem = {
          id: Date.now(),
          title: this.newTaskTitle,
          description: this.newTaskDescription,
          completed: false
        };
        this.todoList.push(newTodoItem);
      }

      this.saveTasks();  // Guardar las tareas en localStorage
      console.log(this.todoList);
      this.newTaskTitle = ''; // Limpiar título
      this.newTaskDescription = ''; // Limpiar descripción
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

  // Activar modo edición
  editTask(index: number) {
    const task = this.todoList[index];
    this.newTaskTitle = task.title;
    this.newTaskDescription = task.description;
    this.editingTaskIndex = index; // Activar el modo edición
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
