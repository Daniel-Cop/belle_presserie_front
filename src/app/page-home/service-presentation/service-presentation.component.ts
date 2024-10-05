import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-presentation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service-presentation.component.html',
  styleUrl: './service-presentation.component.css',
})
export class ServicePresentationComponent {}
