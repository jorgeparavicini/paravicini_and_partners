import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit, AfterViewInit {

  @ViewChild('video') video!: ElementRef;

  duration = 3500;

  display = true;

  constructor() { }

  ngOnInit(): void {
    this.hideScrollbar();
    setTimeout(this.showScrollbar, this.duration);
  }

  ngAfterViewInit() {
    const video = this.video.nativeElement as HTMLVideoElement;
    video.oncanplaythrough = () => {
      video.muted = true;
      video.play();
    };
  }

  private hideScrollbar(): void {
    document.body.classList.add('overflow-hidden');
  }

  private showScrollbar(): void {
    document.body.classList.remove('overflow-hidden');
  }

}
