import { Component } from '@angular/core';
import { CarouselHomeComponent } from './carousel-home/carousel-home.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ServicePresentationComponent } from './service-presentation/service-presentation.component';

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [
    CarouselHomeComponent,
    AboutSectionComponent,
    ServicePresentationComponent,
  ],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.css',
})
export class PageHomeComponent {}
