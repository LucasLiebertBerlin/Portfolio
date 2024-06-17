import { Component, ElementRef, ViewChild } from '@angular/core';
import { ClipboardService } from '../../../../shared/services/clipboard/clipboard.service.spec';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  imports: [ CommonModule ],
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  @ViewChild('copyAlert', { static: false }) copyAlert!: ElementRef;

  constructor(private clipboardService: ClipboardService) {}

  copyText() {
    const textToCopy = 'lucas.liebert20@gmail.com';
    this.clipboardService.copyTextToClipboard(textToCopy, this.copyAlert);
  }
}
