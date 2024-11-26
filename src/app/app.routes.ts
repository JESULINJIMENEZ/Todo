import { Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { LayoutComponentsComponent } from './auth/layout-components/layout-components.component';
import { AdminComponent } from './admin/admin/admin.component';
import { LoginComponent } from './auth/pages/login/login.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        
    },
    {
        path: 'admin',
        component:AdminComponent ,
        children: [
            {
                path: 'todolist',
                component: TodoListComponent
            },
        ]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
