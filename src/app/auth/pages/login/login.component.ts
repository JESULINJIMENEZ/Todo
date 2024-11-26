import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  
  constructor(private router: Router) {}

  onSubmit() {
    // Validar las credenciales
    if (this.email === 'email@example.com' && this.password === 'password') {
      console.log('Login Successful');
      this.router.navigate(['/admin/']);  // Redirigir a la página del admin
    } else {
      console.log('Incorrect credentials');
      alert('Correo electrónico o contraseña incorrectos.');  // Mostrar alerta en caso de error
    }
  }
}
