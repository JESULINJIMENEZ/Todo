import { Component } from '@angular/core';
import { TodoListComponent } from "../../components/todo-list/todo-list.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [TodoListComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
