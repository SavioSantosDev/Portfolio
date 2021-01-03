import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';

import { Case } from 'src/models/ICase';
import { CasesService } from '../services/cases.service';

@Injectable({
  providedIn: 'root'
})
export class CasesResolverGuard implements Resolve<Case | Case[]> {

  constructor(
    private casesService: CasesService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Case> | Observable<Case[]> {

    // Se for passado parâmetros é para mostrar apenas um case. id vai ser o caseName
    if (  route.params && route.params.id  ) {
      return this.casesService.show(  route.params.id  );
    }

    // Se não for passado parâmetros é para fazer a listagem dos cases.
    return this.casesService.list();
  }
}
