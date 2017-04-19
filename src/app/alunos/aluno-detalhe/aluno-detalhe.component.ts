import { Subscription } from 'rxjs/Rx';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlunosService } from '../services/alunos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: any;
  id: any;
  inscricao: Subscription;

  constructor(private url: ActivatedRoute, private alunoService: AlunosService, private rota: Router) { }

  ngOnInit() {
    this.inscricao = this.url.params.subscribe((parametro) => 
    {
      this.id = parametro['id'];

      this.aluno = this.alunoService.getAlunoId(parametro['id']);
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  editar() {
    this.rota.navigate(['/alunos', this.id, 'edit']);
  }
}
