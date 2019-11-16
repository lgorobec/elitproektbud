import {Component, OnInit} from '@angular/core';
import {LanguageService} from './shared/services/language.service';
import {HomeService} from './shared/services/home.service';
import {Home} from './shared/models/home.model';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  constructor(public languageServicve: LanguageService,
              public homeService: HomeService,
              public meta: Meta,
              public titleService: Title) {}

  ngOnInit() {
    this.reloadData();
    this.languageServicve.selectLang.subscribe(() => {
      this.reloadData();
    });
  }

  reloadData() {
    if (this.languageServicve.selectLang.value) {
        this.homeService.getHomeSeo().subscribe((data: Home) => {
            if (data) {
                this.titleService.setTitle(data.home_title);
                this.meta.addTags([
                    {name: 'description', content: data.home_description},
                    {name: 'keywords', content: data.home_keywords}]);
            }
        });
    }
  }
}
