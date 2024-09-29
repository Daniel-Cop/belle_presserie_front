import { Component } from '@angular/core';
import { CarouselHomeComponent } from './carousel-home/carousel-home.component';

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [CarouselHomeComponent],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.css',
})
export class PageHomeComponent {}
