import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent implements OnInit, AfterViewInit {
  @ViewChild('video') video!: ElementRef;

  duration = 7500;
  fadeOutDuration = 2000;

  display = true;
  shouldHide = false;

  constructor() {}

  ngOnInit(): void {
    this.hideScrollbar();
    setTimeout(() => this.hideOverlay(), this.duration);
    setTimeout(
      () => (this.display = false),
      this.duration + this.fadeOutDuration
    );
  }

  ngAfterViewInit() {
    const video = this.video.nativeElement as HTMLVideoElement;
    video.oncanplaythrough = () => {
      video.muted = true;
      video.play();
    };
  }

  hideOverlay(): void {
    this.shouldHide = true;
    this.showScrollbar();
  }

  private hideScrollbar(): void {
    if (typeof document !== 'undefined') {
      document.body.classList.add('overflow-hidden');
    }
  }

  private showScrollbar(): void {
    if (typeof document !== 'undefined') {
      document.body.classList.remove('overflow-hidden');
    }
  }
}
