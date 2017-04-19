import { CanLoad, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { LoginServiceService } from 'app/login/login-service.service';

@Injectable()
export class AuthLoadGuard implements CanLoad {

  constructor(private loginService: LoginServiceService, private rota: Router) { }


    public canLoad(route: Router): Observable<boolean> | Promise<boolean> | boolean {

      if(this.loginService.getUsuarioLogado()) {            
            return true;
        }
        else {
            this.rota.navigate(['/login']);
            return false;
        }
    }
}
