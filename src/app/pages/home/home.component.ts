import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Case } from 'src/models/ICase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cases: Case[];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cases = this.route.snapshot.data.cases;
  }

}
