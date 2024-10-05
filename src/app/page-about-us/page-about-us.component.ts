import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-about-us',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './page-about-us.component.html',
  styleUrl: './page-about-us.component.css',
})
export class PageAboutUsComponent {}
