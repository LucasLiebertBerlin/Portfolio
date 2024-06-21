import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './modules/core/components/header/header.component';
import { MainComponent } from './modules/pages/main/main.component';
import { MouseFollowerComponent } from './modules/core/mouse-follower/mouse-follower.component';
import { FooterComponent } from './modules/core/components/footer/footer.component';
import { ImprintComponent } from './modules/pages/imprint/imprint.component';
import { PrivacyPolicyComponent } from './modules/pages/privacy-policy/privacy-policy.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TranslateModule,  // <-- Hinzufügen des TranslateModule
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MouseFollowerComponent,
    ImprintComponent,
    PrivacyPolicyComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';

  constructor(private translate: TranslateService) {
    // Setzen der Standard-Sprache auf Englisch ('en')
    this.translate.setDefaultLang('en');
    
    // Explizit auf Englisch setzen, unabhängig von der Browsersprache
    this.translate.use('en');
  }
}
