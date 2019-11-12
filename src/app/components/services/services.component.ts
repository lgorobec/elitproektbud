import { Component, OnInit } from '@angular/core';
import {Service} from '../../shared/models/service.model';
import {ServiceService} from '../../shared/services/service.services';
import {Servicepage} from '../../shared/models/servicepage.model';
import {Meta, Title} from '@angular/platform-browser';
import {ScrollToConfigOptions, ScrollToService} from '@nicky-lenaers/ngx-scroll-to';
import {LanguageService} from '../../shared/services/language.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.less']
})
export class ServicesComponent implements OnInit {

  services: Service[];
  ser_ceo: Servicepage;

  constructor(public serviceService: ServiceService,
              public meta: Meta,
              public titleService: Title,
              public scrollToService: ScrollToService,
              public languageService: LanguageService) { }

  ngOnInit() {
    this.reloadData();
    this.languageService.selectLang.subscribe((lang) => {
      this.reloadData();
    });
    this.triggerScrollTo();
  }

  public triggerScrollTo() {
    const config: ScrollToConfigOptions = {
      target: 'serv'
    };
    this.scrollToService.scrollTo(config);
  }

  public reloadData() {
      this.serviceService.getServices().subscribe((data: Service[]) => {
          if (data) {
              this.services = data;
          } else {
              this.languageService.setDefaultLang();
          }
      });
      this.serviceService.getServicesPage().subscribe((data: Servicepage) => {
          if (data) {
              this.ser_ceo = data;
              // this.titleService.setTitle(this.ser_ceo.ceo_title);
              this.meta.addTags([
                  {name: 'description', content: this.ser_ceo.description},
                  {name: 'keywords', content: this.ser_ceo.keywords}]);
          }
      });
  }
}
