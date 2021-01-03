import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Case } from 'src/models/ICase';

@Component({
  selector: 'app-case-preview',
  templateUrl: './case-preview.component.html',
  styleUrls: ['./case-preview.component.scss']
})
export class CasePreviewComponent implements OnInit {

  case: Case;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.case = this.route.snapshot.data.case;
  }

}
