import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApi} from '../base-api/base-api';
import {TranslateService} from '@ngx-translate/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Language} from '../models/language.model';

@Injectable()
export class LanguageService extends BaseApi {

  selectLang: BehaviorSubject<string> = new BehaviorSubject<string>('');
  defaultLang: Language;
  languages = [];

  constructor(public http: HttpClient,
              public translate: TranslateService) {
    super(http);
  }

  changeLanguage(lang: string) {
    this.translate.addLangs(this.languages);
    this.translate.setDefaultLang(this.defaultLang.code);
    this.translate.use(lang);
    this.selectLang.next(lang);
    localStorage.setItem('lang', lang);
  }

  getLanguages(): Observable <Language[]> {
    return this.get('languages')
        .map((data: Language[][]) => data[0] ? data[0] : undefined);
  }

  setDefaultLang() {
      this.translate.addLangs(this.languages);
      this.translate.setDefaultLang(this.defaultLang.code);
      this.translate.use(this.defaultLang.code);
      this.selectLang.next(this.defaultLang.code);
      localStorage.setItem('lang', this.defaultLang.code);
  }
}
