import { Login } from './login';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class LoginServiceService {

  loginsValidos: Login [] = [
    {nome: 'root', senha: '123', level: 'full'},
    {nome: 'thiago', senha: '456', level: 'read'}
  ];

  validacao: boolean = false;
  enviarValidacao = new EventEmitter();
  dadosUsuarioLogado: Login;

  constructor() { }

  autenticacao(usuario: Login): boolean {

    for (let item of this.loginsValidos) {

      if(usuario.nome == item.nome && usuario.senha == item.senha) {
        this.dadosUsuarioLogado = item;
        this.validacao = true;
        this.enviarValidacao.emit(this.validacao);
      }
    }

    /*if(usuario.nome == 'thiago' && usuario.senha == '123456') {
      this.validacao = true;
      this.enviarValidacao.emit(this.validacao);
    }*/

    return this.validacao;
  }

  getUsuarioLogado(): boolean {
    return this.validacao;
  }
}