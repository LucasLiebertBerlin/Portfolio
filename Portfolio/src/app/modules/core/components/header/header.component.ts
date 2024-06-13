import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule]
})
export class HeaderComponent implements AfterViewInit {

  logoUrl: string = 'assets/img/logo.png';
  linkUrl: string = 'https://example.com';
  burgerMenuOpen: boolean = false;

  @ViewChild('burgerMenu') burgerMenu!: ElementRef;
  @ViewChild('header') header!: ElementRef;
  ngAfterViewInit() { // wird ausgeführt wenn alles HTML der Komponente geladen wurde
    // console.log(this.burgerMenu);
    console.log(this.header);
  }

  toggleBurgerMenu(): void {
    if (this.burgerMenu) {
      if (this.burgerMenuOpen) {
        this.header.nativeElement.classList.remove('fixed');
        this.burgerMenu.nativeElement.classList.remove('slide-in');
        this.burgerMenu.nativeElement.classList.add('slide-out');
        setTimeout(() => {
          this.burgerMenu.nativeElement.classList.add('d-none');
        }, 1000); // Wartezeit, bis die Animation beendet ist
        this.burgerMenuOpen = false;
      } else {
        this.header.nativeElement.classList.add('fixed');
        this.burgerMenu.nativeElement.classList.remove('d-none');
        this.burgerMenu.nativeElement.classList.remove('slide-out');
        setTimeout(() => {
          this.burgerMenu.nativeElement.classList.add('slide-in');
        }, 10); // Kurze Wartezeit, damit der Browser die Klassenänderung verarbeitet
        this.burgerMenuOpen = true;
      }
    }
  }



}
