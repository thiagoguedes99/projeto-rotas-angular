import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  constructor() { }

  getAlunos() {
    return [
      {id: 1, nome: 'joão', email: 'abc@hotmail.com'},
      {id: 2, nome: 'josé', email: 'def@gmail.com'},
      {id: 3, nome: 'maria', email: 'ghi@outlook.com'}
    ]
  }

   getAlunoId(id: number) {
    let alunos = this.getAlunos();

    for(let item of alunos){

      if(item.id == id){
        return item;
      }
    }

    return null;
  }

}
