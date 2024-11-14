import { Component, inject } from '@angular/core';
import { ServiceCardComponent } from './service-card/service-card.component';
import { ServiceService } from '../_service/service.service';

@Component({
  selector: 'app-page-service',
  standalone: true,
  imports: [ServiceCardComponent],
  templateUrl: './page-service.component.html',
  styleUrl: './page-service.component.css',
})
export class PageServiceComponent {
  service = inject(ServiceService);

  servicesList = this.service.getAllServices();
}
