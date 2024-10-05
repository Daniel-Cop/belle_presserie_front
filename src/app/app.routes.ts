import { Routes } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageAboutUsComponent } from './page-about-us/page-about-us.component';
import { PageServiceComponent } from './page-service/page-service.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { Page404Component } from './page-404/page-404.component';

export const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'a-propos', component: PageAboutUsComponent },
  { path: 'services', component: PageServiceComponent },
  { path: 'contact', component: PageContactComponent },
  { path: '**', component: Page404Component },
];
