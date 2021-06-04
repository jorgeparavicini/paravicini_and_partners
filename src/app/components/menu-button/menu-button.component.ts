import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
})
export class MenuButtonComponent implements OnInit {
  open = true;

  constructor() {}

  ngOnInit(): void {}

  public setOpenState(isOpen: boolean): void {
    this.open = isOpen;

    if (this.open && window.innerWidth < 768) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  }
}
