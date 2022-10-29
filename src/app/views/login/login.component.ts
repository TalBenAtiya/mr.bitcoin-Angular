import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
    ) { }
  username!: 'string'

  ngOnInit(): void {

  }

  onLogin() {
    const user = this.userService.login(this.username)
    if (user) this.router.navigate(['/'])
  }
}
