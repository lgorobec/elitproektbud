import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LanguageService} from '../../services/language.service';
import {Language} from '../../models/language.model';
import 'rxjs/add/operator/filter';
import {Subject} from 'rxjs';
import {first, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit, OnDestroy {

  selectedLanguage: string;
  languages: Language[];
  opened: boolean;
  unsubscriber$ = new Subject<boolean>();

  constructor(
      public translate: TranslateService,
      public languageService: LanguageService,
  ) {}

  ngOnInit(): void {
    this.setLanguages();
  }

  changeLanguage(): void {
    this.languageService.changeLanguage(this.selectedLanguage);
  }

  setLanguages(): void {
    this.languageService.getLanguages()
        .pipe(
          first(),
          takeUntil(this.unsubscriber$),
        ).subscribe((data: Language[]) => {
          if (data) {
            this.languages = data;
            for (const language of this.languages) {
              this.languageService.languages.push(language.code);
            }
            [ this.languageService.defaultLang ] = [ ...data.filter((lang => +lang.is_default === 1)) ];
            if (localStorage.getItem('lang')) {
              this.selectedLanguage = localStorage.getItem('lang');
            } else {
              this.selectedLanguage = this.languageService.defaultLang.code;
              localStorage.setItem('lang', this.languageService.defaultLang.code);
            }
            this.languageService.changeLanguage(this.selectedLanguage);
          }
    });
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next(true);
    this.unsubscriber$.unsubscribe();
  }
}
