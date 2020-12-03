import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LogRestService } from '../service/log-rest.service';

@Injectable({
  providedIn: 'root'
})
export class GuardAdminGuard implements CanActivate {

  constructor(private logRest: LogRestService, private router: Router){ }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.logRest.isUser()){
      return true;
    }else{
      return this.router.parseUrl("/");
    }
  }
  
}
