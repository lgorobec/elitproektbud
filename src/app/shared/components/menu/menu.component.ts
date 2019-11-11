import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LanguageService} from '../../services/language.service';
import {Language} from '../../models/language.model';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  selectedLanguage: string;
  languages: Language[];
  opened: boolean;

  constructor(public translate: TranslateService,
              public languageService: LanguageService) { }

  ngOnInit() {
    this.setLanguages();
  }

  changeLanguage() {
    this.languageService.changeLanguage(this.selectedLanguage);
  }

  setLanguages() {
    this.languageService.getLanguages().subscribe((data: Language[]) => {
      if (data) {
        this.languages = data;
        for (const language of this.languages) {
          this.languageService.languages.push(language.code);
        }
        this.languageService.defaultLang = data.filter((lang => +lang.is_default == 1))[0];
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
}
