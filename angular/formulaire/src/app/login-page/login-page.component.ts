import { Component, OnInit } from '@angular/core';
import { PersonagesService } from '../service/personages.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username: string = ''
  password: string = ''

  constructor(
    private monService: PersonagesService
  ) { }

  ngOnInit(): void {
  }

  creeSession() {
    this.monService.creeSession(this.username, this.password)
  }

}
