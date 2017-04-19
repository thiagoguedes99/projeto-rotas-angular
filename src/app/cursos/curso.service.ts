import { Injectable } from '@angular/core';

@Injectable()
export class CursoService {

  constructor() { }

  getCursos() {
    return [
      {id: 1, nome: 'angular 2'},
      {id: 2, nome: 'java'}
    ];
  }

  getCursoId(id: number) {
    let cursos = this.getCursos();

    for(let item of cursos){

      if(item.id == id){
        return item;
      }
    }

    return null;
  }

}
