import { CursoService } from './curso.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any [];
  pagina: number;
  inscricao: Subscription;

  constructor(private service: CursoService, private linkUrl: ActivatedRoute, private rota: Router){ }

  ngOnInit() {

    this.cursos = this.service.getCursos();

   this.inscricao =  this.linkUrl.queryParams.subscribe((params)=>{
      this.pagina = params['pagina'];
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximo() {
    this.pagina ++;

    this.rota.navigate(['/cursos'], {queryParams: {'pagina': this.pagina}});
  }

}
