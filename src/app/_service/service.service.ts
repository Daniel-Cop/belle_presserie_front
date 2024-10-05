import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceInterface } from '../_interface/service.interface';
import { servicesList } from '../_mocks/mockServices';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  getAllServices(): ServiceInterface[] {
    return servicesList;
  }
}
