import { Component, ElementRef, ViewChild } from '@angular/core';
import { ClipboardService } from '../../../../shared/services/clipboard/clipboard.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  @ViewChild('copyAlert', { static: false }) copyAlert!: ElementRef;

  constructor(private clipboardService: ClipboardService) {}

  copyText() {
    const textToCopy = 'lucas.liebert20@gmail.com';
    this.clipboardService.copyTextToClipboard(textToCopy, this.copyAlert);
  }
}
