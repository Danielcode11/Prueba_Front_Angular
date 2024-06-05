import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  register() {
    this.userService.register(this.username, this.password).subscribe(
      data => {
        localStorage.setItem('user', JSON.stringify(data));
        this.router.navigate(['/profile']);
      },
      error => {
        console.error('Registration error', error);
      }
    );
  }
}
