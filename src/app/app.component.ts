import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './login/login-service.service';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  mostraMenu: boolean = false;

  constructor(private loginService: LoginServiceService,) {}

     ngOnInit(): void {
        this.loginService.enviarValidacao.subscribe((valor) => this.mostraMenu = valor);
    }
}
