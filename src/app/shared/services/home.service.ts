import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApi} from '../base-api/base-api';
import {Observable} from 'rxjs';
import {Home} from '../models/home.model';
import {LanguageService} from './language.service';

@Injectable()
export class HomeService extends BaseApi {

  constructor(public http: HttpClient,
              public languageService: LanguageService) {
    super(http);
  }

  getHomeSeo(): Observable <Home> {
    return this.get(`home/${this.languageService.selectLang.value}/seo`)
        .map((home: Home[]) => home[0] ? home[0] : undefined);
  }
}
