import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, UrlSegmentGroup, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UmanaRestService } from '../service/umana-rest.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(
    private umanaRestService: UmanaRestService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    if (this.umanaRestService.isSimpleUser()) {
      return true;
    } else {
      return this.router.parseUrl("/");
    }
  }

}
