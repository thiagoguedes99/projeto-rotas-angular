import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from 'app/cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const AppRouter: Routes = [
    {path: '', component: CursosComponent},
    {path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
    {path: ':id', component: CursoDetalheComponent},
];

@NgModule({
    imports: [RouterModule.forChild(AppRouter)],
    exports: [RouterModule]
})

export class CursosRoutingModule {}