import { Component, Input } from '@angular/core';
import { ServiceInterface } from '../../_interface/service.interface';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css',
})
export class ServiceCardComponent {
  @Input() service?: ServiceInterface;
  @Input() i?: number;
}
