import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginServiceService } from "app/login/login-service.service";
//import { CursosModule } from './cursos/cursos.module';
//import { AlunosModule } from './alunos/alunos.module';
import { AuthGuard } from './guards/auth-guard.guard';
import { AuthLoadGuard } from './guards/auth-load.guard';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NaoEncontradoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    //CursosModule,
    //AlunosModule,
  ],
  providers: [AuthLoadGuard, AuthGuard, LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
