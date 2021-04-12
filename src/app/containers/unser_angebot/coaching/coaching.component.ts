import { Component, OnInit } from '@angular/core';
import { UnserAngebotComponent } from '../unser_angebot.component';

@Component({
  selector: 'app-coaching',
  templateUrl: './coaching.component.html',
  styleUrls: ['./coaching.component.scss'],
})
export class CoachingComponent extends UnserAngebotComponent implements OnInit {
  get subSiteIndex(): number {
    return 2;
  }

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
