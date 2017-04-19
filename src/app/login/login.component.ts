import { Router } from '@angular/router';
import { LoginServiceService } from './login-service.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  resp: boolean = false;

  usuario: Login = new Login();

  constructor(private logar: LoginServiceService, private rota: Router) { }

  ngOnInit() {
  }

  login() {
    this.resp =  this.logar.autenticacao(this.usuario);

    if(this.resp) {
      this.rota.navigate(['/']);
    }
  }
}