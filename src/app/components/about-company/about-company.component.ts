import { Component, OnInit } from '@angular/core';
import {AboutService} from '../../shared/services/about.service';
import {Meta, Title} from '@angular/platform-browser';
import {About} from '../../shared/models/about.model';
import {ScrollToConfigOptions, ScrollToService} from '@nicky-lenaers/ngx-scroll-to';

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
              public scrollToService: ScrollToService) { }

  ngOnInit() {
    this.triggerScrollTo();
    this.aboutService.getAbout().subscribe((data: About []) => {
      this.about = data[0];
      this.titleService.setTitle(this.about.ceo_title);
      this.meta.addTags([
        {name: 'description', content: this.about.ceo_desc},
        {name: 'keywords', content: this.about.ceo_keys}]);
    });
  }

  public triggerScrollTo() {
    const config: ScrollToConfigOptions = {
      target: 'aboutCompany'
    };
    this.scrollToService.scrollTo(config);
  }
}
