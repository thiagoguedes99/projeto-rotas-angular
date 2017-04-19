import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosService } from './services/alunos.service';
import { AuthChildrenGuard } from './guards/auth-children.guard';
import { AuthOffGuard } from '../guards/auth-off.guard';


@NgModule({
    declarations: [
        AlunosComponent,
        AlunoDetalheComponent,
        AlunoFormComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        AlunosRoutingModule,
    ],
    providers: [AlunosService, AuthChildrenGuard, AuthOffGuard]
})

export class AlunosModule {}