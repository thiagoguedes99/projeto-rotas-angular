import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { LoginServiceService } from '../login/login-service.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private loginService: LoginServiceService, private rota: Router) {}


    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        if(this.loginService.getUsuarioLogado()) {            
            return true;
        }
        else {
            this.rota.navigate(['/login']);
            return false;
        }
    }
}
