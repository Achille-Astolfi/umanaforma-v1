import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UmanaFormaRestServiceService } from '../service/umana-forma-rest-service.service';

@Injectable({
  providedIn: 'root'
})
export class TypeLoggedUserGuard implements CanActivate {
  constructor(private umanaFormaRestService : UmanaFormaRestServiceService) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.umanaFormaRestService.isLogged();
  }
  
}
