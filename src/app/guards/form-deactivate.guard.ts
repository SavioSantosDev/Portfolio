import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { IFormCanDeativate } from 'src/models/IFormCanDeactivate';

@Injectable({
  providedIn: 'root'
})
export class FormDeactivateGuard implements CanDeactivate<IFormCanDeativate> {
  canDeactivate(
    component: IFormCanDeativate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canExit();
  }
}
