import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LogRestService } from '../service/log-rest.service';

@Injectable({
  providedIn: 'root'
})
export class GuardUserGuard implements CanActivate {
  constructor(private logRest: LogRestService){ }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.logRest.isUser();
  }
  
}
