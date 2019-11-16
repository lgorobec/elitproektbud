import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApi} from '../base-api/base-api';
import {Observable} from 'rxjs';
import {Requestt} from '../models/requestt.model';
import {LanguageService} from './language.service';

@Injectable()
export class RequestService extends BaseApi {

  constructor(public http: HttpClient,
              public languageService: LanguageService) {
    super(http);
  }

  addRequest(req: Requestt): Observable <Requestt> {
    return this.post(`request-call/store/${this.languageService.selectLang.value}`, req);
  }
}
