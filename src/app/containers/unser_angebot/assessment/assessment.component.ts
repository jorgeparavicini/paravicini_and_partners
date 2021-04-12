import { Component, OnInit } from '@angular/core';
import { UnserAngebotComponent } from '../unser_angebot.component';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss'],
})
export class AssessmentComponent
  extends UnserAngebotComponent
  implements OnInit {
  get subSiteIndex(): number {
    return 1;
  }

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
