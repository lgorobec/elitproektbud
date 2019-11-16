import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ServiceService} from '../../shared/services/service.services';
import {Service} from '../../shared/models/service.model';
import {Meta, Title} from '@angular/platform-browser';
import {ScrollToConfigOptions, ScrollToService} from '@nicky-lenaers/ngx-scroll-to';
import {LanguageService} from '../../shared/services/language.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.less']
})
export class ServiceComponent implements OnInit {

  id = 0;
  service = new Service('', '', '', '', '', '', '', '', '', '', '');

  constructor(public activatedRoute: ActivatedRoute,
              public serviceService: ServiceService,
              public meta: Meta,
              public titleService: Title,
              public scrollToService: ScrollToService,
              public languageService: LanguageService) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.reloadData();
    });
    this.triggerScrollTo();
    this.languageService.selectLang.subscribe((lang) => {
      this.reloadData();
    });
  }

  public triggerScrollTo() {
    const config: ScrollToConfigOptions = {
      target: 'servOne'
    };
    this.scrollToService.scrollTo(config);
  }

  public reloadData() {
      if (this.languageService.selectLang.value) {
          this.serviceService.getServiceById(this.id).subscribe((data: Service) => {
              console.log(data);
              if (data) {
                  this.service = data;
                  this.titleService.setTitle(this.service.title);
                  this.meta.addTags([
                      {name: 'description', content: this.service.description},
                      {name: 'keywords', content: this.service.keywords}]);
              }
          });
      }
  }
}
