import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApi} from '../base-api/base-api';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class LanguageService extends BaseApi {

  constructor(public http: HttpClient,
              public translate: TranslateService) {
    super(http);
  }

  changeLanguage(lang: string) {
    this.translate.addLangs(['ru', 'ua', 'en']);
    this.translate.setDefaultLang('ru');
    this.translate.use(lang);
  }
}
