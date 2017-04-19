import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: string;
  inscricao: Subscription;
  curso: any;

  constructor(private parametro: ActivatedRoute, private servico: CursoService, private rotas: Router) { }

  ngOnInit() {
    this.inscricao = this.parametro.params.subscribe((param)=> {
      this.id = param['id'];

      this.curso = this.servico.getCursoId(param['id']);

      if(this.curso == null){
        this.rotas.navigate(['cursos/naoEncontrado']);
      }
    });
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
