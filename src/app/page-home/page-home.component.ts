import { Component } from '@angular/core';
import { CarouselHomeComponent } from './carousel-home/carousel-home.component';
import { AboutSectionComponent } from './about-section/about-section.component';

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [CarouselHomeComponent, AboutSectionComponent],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.css',
})
export class PageHomeComponent {}
