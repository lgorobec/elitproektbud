import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApi} from '../base-api/base-api';
import {TranslateService} from '@ngx-translate/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class LanguageService extends BaseApi {

  selectLang: BehaviorSubject<string> = new BehaviorSubject<string>('ru');

  constructor(public http: HttpClient,
              public translate: TranslateService) {
    super(http);
  }

  changeLanguage(lang: string) {
    this.translate.addLangs(['ru', 'ua', 'en']);
    this.translate.setDefaultLang('ru');
    this.translate.use(lang);
    this.selectLang.next(lang);
  }
}
