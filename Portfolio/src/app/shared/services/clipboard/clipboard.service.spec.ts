import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {
  constructor() {}

  copyTextToClipboard(text: string, alertElement: ElementRef) {
    if (navigator.clipboard) {
      this.copyUsingClipboardAPI(text, alertElement);
    } else {
      this.copyUsingFallback(text, alertElement);
    }
  }

  private copyUsingClipboardAPI(text: string, alertElement: ElementRef) {
    navigator.clipboard.writeText(text).then(() => {
      this.showCopyAlert(alertElement);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }

  private copyUsingFallback(text: string, alertElement: ElementRef) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      console.log('Fallback: Text copied to clipboard');
    } catch (err) {
      console.error('Fallback: Failed to copy text', err);
    }
    document.body.removeChild(textarea);
    this.showCopyAlert(alertElement);
  }

  private showCopyAlert(alertElement: ElementRef) {
    alertElement.nativeElement.classList.remove('d-none');
    setTimeout(() => alertElement.nativeElement.classList.add('slide-in'), 100);
    setTimeout(() => {
      alertElement.nativeElement.classList.remove('slide-in');
      alertElement.nativeElement.classList.add('slide-out');
    }, 1000);
    setTimeout(() => {
      alertElement.nativeElement.classList.remove('slide-out');
      alertElement.nativeElement.classList.add('d-none');
    }, 3000);
  }
}
