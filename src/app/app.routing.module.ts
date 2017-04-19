import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { AuthLoadGuard } from './guards/auth-load.guard';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

const AppRouter: Routes = [
    {path: '',
     component: HomeComponent,
     canLoad: [AuthLoadGuard],
     canActivate: [AuthGuard]},

    {path: 'login',
    component: LoginComponent},

    {path: 'cursos',
     loadChildren: 'app/cursos/cursos.module#CursosModule',
     canLoad: [AuthLoadGuard],
     canActivate: [AuthGuard]},

    {path: 'alunos',
     loadChildren: 'app/alunos/alunos.module#AlunosModule',
     canLoad: [AuthLoadGuard],
     canActivate: [AuthGuard]},

     {path: '**',
    component: NaoEncontradoComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(AppRouter)],
    exports: [RouterModule]
})

export class AppRoutingModule {}