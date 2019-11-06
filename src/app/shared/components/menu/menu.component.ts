import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LanguageService} from '../../services/language.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  selectedLanguage: string;
  languages = ['ru', 'ua', 'en'];
  menu = [];
  opened: boolean;

  constructor(public translate: TranslateService,
              public languageService: LanguageService) { }

  ngOnInit() {
    if (localStorage.getItem('lang')) {
      this.selectedLanguage = localStorage.getItem('lang');
    } else {
      this.selectedLanguage = 'ru';
      localStorage.setItem('lang', 'ru');
    }
    this.languageService.changeLanguage(this.selectedLanguage);
  }

  changeLanguage() {
    localStorage.setItem('lang', this.selectedLanguage);
    this.languageService.changeLanguage(this.selectedLanguage);
  }
}
