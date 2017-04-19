import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { LoginServiceService } from '../../login/login-service.service';

@Injectable()
export class AuthChildrenGuard implements CanActivateChild {

  constructor(private service: LoginServiceService) { }


    public canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
         
         if(state.url.includes('edit')) {
           if(this.service.dadosUsuarioLogado.level != 'full'){
             alert('você não tem permissão para editar!');
             return false;
           }
         }
         console.log('cand');
         return true;
    }
}
