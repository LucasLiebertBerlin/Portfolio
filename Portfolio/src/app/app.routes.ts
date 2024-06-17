import { Routes } from '@angular/router';
import { MainComponent } from './modules/pages/main/main.component';
import { ImprintComponent } from './modules/pages/imprint/imprint.component';


export const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: MainComponent },
  { path: 'imprint', component: ImprintComponent }
];