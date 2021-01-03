import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { CasesService } from 'src/app/services/cases.service';
import { Case } from 'src/models/ICase';

@Component({
  selector: 'app-cases-list',
  templateUrl: './cases-list.component.html',
  styleUrls: ['./cases-list.component.scss']
})
export class CasesListComponent implements OnInit {

  cases: Case[];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // O próprio resolver do angular se encarrega de inscrever e desinscrever
    this.cases = this.route.snapshot.data.cases;
  }

}
