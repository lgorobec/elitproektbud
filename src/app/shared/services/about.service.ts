import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BaseApi } from '../base-api/base-api';
import { About } from '../models/about.model';
import {LanguageService} from './language.service';

@Injectable()
export class AboutService extends BaseApi {

  constructor(public http: HttpClient,
              public languageService: LanguageService) {
    super(http);
  }

  getAbout(): Observable <About> {
    return this.get(`about/${this.languageService.selectLang.value}`)
        .map((about: About[]) => about[0] ? about[0] : undefined);
  }
}
