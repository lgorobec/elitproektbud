import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApi} from '../base-api/base-api';
import {Observable} from 'rxjs';
import {Obj} from '../models/object.model';
import {Objectpage} from '../models/objectpage.model';
import {LanguageService} from './language.service';

@Injectable()
export class ObjectService extends BaseApi {

  constructor(public http: HttpClient,
              public languageService: LanguageService) {
    super(http);
  }

  getObjects(): Observable <Obj[]> {
    return this.get(`objects/${this.languageService.selectLang.value}`)
        .map((obj: Obj[][]) => obj[0] ? obj[0] : undefined);
  }

  getObjectPage(): Observable <Objectpage> {
    return this.get(`objects/${this.languageService.selectLang.value}/seo`)
        .map((obj: Objectpage[]) => obj[0] ? obj[0] : undefined);
  }

  getObjectById(id: number): Observable <Obj> {
    return this.get(`objects/${this.languageService.selectLang.value}/show/${id}`)
        .map((obj: Obj[]) => obj[0] ? obj[0] : undefined);
  }
}
