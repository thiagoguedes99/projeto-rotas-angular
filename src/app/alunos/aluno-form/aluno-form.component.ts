import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
import { AlunosService } from '../services/alunos.service';
import { IauthOff } from '../../guards/iauth-off';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IauthOff {
    
  aluno: any;
  id: any;
  inscricao: Subscription;

  constructor(private url: ActivatedRoute, private alunoService: AlunosService, private rota: Router) { }

  ngOnInit() {
    this.inscricao = this.url.params.subscribe((parametro) => 
    {
      this.id = parametro['id'];

      this.aluno = this.alunoService.getAlunoId(parametro['id']);

      if(this.aluno == null) {
        this.aluno = {};
      }
    });
  }

  podeMudarRota(): boolean {
      return confirm('Quer realmente sair do formulário?');
    }

}