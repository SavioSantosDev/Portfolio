import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from './../../environments/environment';
import { Case } from 'src/models/ICase';

@Injectable({
  providedIn: 'root'
})
export class CasesService {

  private readonly API = `${environment.API}cases`;

  constructor(
    private http: HttpClient
  ) { }


  list(): Observable<Case[]> {
    return this.http.get<Case[]>(this.API).pipe(
      tap(console.log)
    );
  }
}
