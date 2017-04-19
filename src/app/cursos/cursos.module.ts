import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from "app/cursos/curso-nao-encontrado/curso-nao-encontrado.component";
import { CursoService } from './curso.service';
import { RouterModule } from '@angular/router';
import { CursosRoutingModule } from './cursos.routing.module';


@NgModule({
    declarations: [
        CursosComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent
    ],
    imports: [
        CommonModule,
        CursosRoutingModule
    ],
    providers: [CursoService] 
})

export class CursosModule {}