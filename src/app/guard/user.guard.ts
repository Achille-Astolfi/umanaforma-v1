import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UmanaRestService } from '../service/umana-rest.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

constructor(private umanaRest: UmanaRestService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.umanaRest.isUser();
  }
  
}
