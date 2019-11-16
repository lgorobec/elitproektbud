import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApi} from '../base-api/base-api';
import {Observable} from 'rxjs';
import {Service} from '../models/service.model';
import {Servicepage} from '../models/servicepage.model';
import {LanguageService} from './language.service';

@Injectable()
export class ServiceService extends BaseApi {

  constructor(public http: HttpClient,
              public languageService: LanguageService) {
    super(http);
  }

  getServices(): Observable <Service[]> {
    return this.get(`services/${this.languageService.selectLang.value}`)
        .map((ser: Service[][]) => ser[0] ? ser[0] : undefined);
  }

  getServiceById(id: number): Observable <Service> {
    return this.get(`services/${this.languageService.selectLang.value}/show/${id}`)
        .map((ser: Service[]) => ser[0] ? ser[0] : undefined);
  }

  getServicesPage(): Observable <Servicepage> {
    return this.get(`services/${this.languageService.selectLang.value}/seo`)
        .map((ser: Servicepage[]) => ser[0] ? ser[0] : undefined);
  }
}
