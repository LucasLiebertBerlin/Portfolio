import { CommonModule } from '@angular/common';
import { Component, Input, ElementRef, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ViewportService } from '../services/viewport/viewport-service.service';
import { slideInOutLeft, slideInFromBottom, slideInOutRight } from '../animations/animations';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  animations: [
    slideInOutLeft,
    slideInOutRight,
    slideInFromBottom
  ]
})
export class ProjectCardComponent implements AfterViewInit, OnDestroy {
  @Input() projectImage: string = '';
  @Input() headline: string = '';
  @Input() techStack: string = '';
  @Input() description: string = '';
  @Input() liveTestLink: string = '';
  @Input() gitLink: string = '';
  @Input() rowReverse: boolean = false;
  @Input() index: number = 1;

  slideIn = 'out';
  slideInRight = 'out';
  slideInBottom: string = 'out';
  private subscription: Subscription | undefined;

  constructor(
    private el: ElementRef,
    private viewportService: ViewportService,
    private cdr: ChangeDetectorRef
  ) { }

  ngAfterViewInit() {
    this.subscription = this.viewportService.observeElement(this.el.nativeElement).subscribe(isIntersecting => {
      this.slideIn = isIntersecting ? 'in' : 'out';
      this.slideInRight = isIntersecting ? 'in' : 'out';
      this.slideInBottom = isIntersecting ? 'in' : 'out';
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
