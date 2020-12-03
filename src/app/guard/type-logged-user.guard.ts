import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UmanaFormaRestServiceService } from '../service/umana-forma-rest-service.service';

@Injectable({
  providedIn: 'root'
})
export class TypeLoggedUserGuard implements CanActivate {
  constructor(
    private umanaFormaRestService : UmanaFormaRestServiceService,
    private router: Router
    ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(this.umanaFormaRestService.userLogged == "user" || this.umanaFormaRestService.userLogged == "admin" ) {
      return true;
    } else {
      return this.router.parseUrl("/");
    }
  }
  
}
