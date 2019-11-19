import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApi} from '../base-api/base-api';
import {Observable} from 'rxjs';
import {Licence} from '../models/licence.model';
import {LanguageService} from './language.service';

@Injectable()
export class LicenceService extends BaseApi {

  constructor(public http: HttpClient,
              public languageServices: LanguageService) {
    super(http);
  }

  getLicences(): Observable <Licence> {
    return this.get(`licenses/${this.languageServices.selectLang.value}`)
        .map((lic: Licence[]) => lic[0] ? lic[0] : undefined);
  }
}
