import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UmanaFormaRestServiceService } from '../service/umana-forma-rest-service.service';

@Injectable({
  providedIn: 'root'
})
export class TypeLoggedAdminGuard implements CanActivate {

  constructor(
    private umanaFormaRestService : UmanaFormaRestServiceService,
    private router: Router
    ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.umanaFormaRestService.isAdmin()) {
        return true;
      } else {
        return this.router.parseUrl("/forbidden");
      }
  }
  
}
