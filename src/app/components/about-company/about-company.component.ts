import { Component, OnInit } from '@angular/core';
import {AboutService} from '../../shared/services/about.service';
import {Meta, Title} from '@angular/platform-browser';
import {About} from '../../shared/models/about.model';
import {ScrollToConfigOptions, ScrollToService} from '@nicky-lenaers/ngx-scroll-to';
import {LanguageService} from '../../shared/services/language.service';

@Component({
  selector: 'app-about-company',
  templateUrl: './about-company.component.html',
  styleUrls: ['./about-company.component.less']
})
export class AboutCompanyComponent implements OnInit {

  about = new About('', '', '', '');

  constructor(public aboutService: AboutService,
              public meta: Meta,
              public titleService: Title,
              public scrollToService: ScrollToService,
              public languageService: LanguageService) { }

  ngOnInit() {
    this.triggerScrollTo();
    this.reloadData();
    this.languageService.selectLang.subscribe((lang) => {
        this.reloadData();
    });
  }

  public triggerScrollTo() {
    const config: ScrollToConfigOptions = {
      target: 'aboutCompany'
    };
    this.scrollToService.scrollTo(config);
  }

  public reloadData() {
      if (this.languageService.selectLang.value) {
          this.aboutService.getAbout().subscribe((data: About) => {
              this.about = data;
              this.titleService.setTitle(this.about.about_title);
              this.meta.addTags([
                  {name: 'description', content: this.about.about_description},
                  {name: 'keywords', content: this.about.about_keywords}]);
          });
      }
  }
}
