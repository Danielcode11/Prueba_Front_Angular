import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  login() {
    this.userService.login(this.username, this.password).subscribe(
      data => {
        localStorage.setItem('user', JSON.stringify(data));
        this.router.navigate(['/profile']);
      },
      error => {
        console.error('Invalid credentials', error);
      }
    );
  }
}
