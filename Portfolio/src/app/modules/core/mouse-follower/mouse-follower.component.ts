import { CommonModule } from '@angular/common';
import { Component, HostListener, NgZone } from '@angular/core';

@Component({
  selector: 'app-mouse-follower',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './mouse-follower.component.html',
  styleUrl: './mouse-follower.component.scss'
})
export class MouseFollowerComponent {
  circleStyle = {
    top: '0px',
    left: '0px',
    display: 'none' // Initial hidden state
  };
  private mouseX: number = 0;
  private mouseY: number = 0;

  constructor(private ngZone: NgZone) {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.ngZone.run(() => {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
      this.updatePointerPosition();
      this.circleStyle.display = 'block'; // Show the follower
    });
  }

  @HostListener('document:mouseleave')
  onMouseLeave() {
    this.ngZone.run(() => {
      this.circleStyle.display = 'none'; // Hide the follower when mouse leaves the window
    });
  }

  @HostListener('document:mouseenter')
  onMouseEnter() {
    this.ngZone.run(() => {
      this.circleStyle.display = 'block'; // Show the follower when mouse re-enters the window
    });
  }

  @HostListener('window:scroll')
  onScroll() {
    this.ngZone.run(() => {
      this.updatePointerPosition();
    });
  }

  private updatePointerPosition() {
    this.circleStyle.top = `${this.mouseY + window.scrollY}px`;
    this.circleStyle.left = `${this.mouseX + window.scrollX}px`;
  }
}
