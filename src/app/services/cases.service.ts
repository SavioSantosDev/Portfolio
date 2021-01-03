import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { environment } from './../../environments/environment';
import { Case } from 'src/models/ICase';

@Injectable({
  providedIn: 'root'
})
export class CasesService {

  private cases = environment.CASES;

  constructor(
    private http: HttpClient
  ) { }


  list(): Observable<Case[]> {
    return this.http.get<Case[]>(this.cases).pipe(
      tap(console.log)
    );
  }


  show(name: string): Observable<Case> {
    return this.http.get<Case[]>(`${this.cases}`).pipe(
      map(  (cases: Case[]) => cases.filter((caseSingle: Case) => caseSingle.name === name)[0]  ),
      tap(console.log)
    );
  }
}
