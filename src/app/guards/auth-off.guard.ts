import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { IauthOff } from './iauth-off';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthOffGuard implements CanDeactivate<IauthOff>{

    constructor() { }
    
    canDeactivate(component: IauthOff, route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : boolean | Observable<boolean> | Promise<boolean> {
      
      return component.podeMudarRota();
    }
}
