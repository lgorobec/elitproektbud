import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApi} from '../base-api/base-api';
import {Observable} from 'rxjs';
import {Service} from '../models/service.model';
import {Servicepage} from '../models/servicepage.model';

@Injectable()
export class ServiceService extends BaseApi {

  constructor(public http: HttpClient) {
    super(http);
  }

  getServices(): Observable <Service[]> {
    return this.get('services');
  }

  getServiceById(id: number): Observable <Service> {
    return this.get(`services?id=${id}`);
  }

  getServicesPage(): Observable <Servicepage> {
    return this.get('servicespage');
  }
}
