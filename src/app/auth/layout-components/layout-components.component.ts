import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { TodoListComponent } from "../../components/todo-list/todo-list.component";

@Component({
  selector: 'app-layout-components',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, FooterComponent, TodoListComponent],
  templateUrl: './layout-components.component.html',
  styleUrl: './layout-components.component.scss'
})
export class LayoutComponentsComponent {

}
