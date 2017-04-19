import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AuthChildrenGuard } from './guards/auth-children.guard';
import { AuthOffGuard } from '../guards/auth-off.guard';


const AlunosRouter: Routes = [
    {path:'', component: AlunosComponent, canActivateChild: [AuthChildrenGuard],
     children: [
        {path: 'novo', component: AlunoFormComponent},
        {path:':id/edit', component: AlunoFormComponent, canDeactivate: [AuthOffGuard]},
        {path: ':id', component: AlunoDetalheComponent},
    ]},
]

@NgModule({
    imports: [RouterModule.forChild(AlunosRouter)],
    exports: [RouterModule]
})

export class AlunosRoutingModule {}