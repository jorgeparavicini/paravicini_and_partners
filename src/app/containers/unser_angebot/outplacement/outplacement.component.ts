import { Component, OnInit } from '@angular/core';
import { UnserAngebotComponent } from '../unser_angebot.component';

@Component({
  selector: 'app-outplacement',
  templateUrl: './outplacement.component.html',
  styleUrls: ['./outplacement.component.scss'],
})
export class OutplacementComponent
  extends UnserAngebotComponent
  implements OnInit {
  get subSiteIndex(): number {
    return 3;
  }

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
