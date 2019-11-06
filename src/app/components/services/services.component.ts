import { Component, OnInit } from '@angular/core';
import {Service} from '../../shared/models/service.model';
import {ServiceService} from '../../shared/services/service.services';
import {Servicepage} from '../../shared/models/servicepage.model';
import {Meta, Title} from '@angular/platform-browser';
import {ScrollToConfigOptions, ScrollToService} from '@nicky-lenaers/ngx-scroll-to';

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
              public scrollToService: ScrollToService) { }

  ngOnInit() {
    this.serviceService.getServices().subscribe((data: Service[]) => {
      if (data) {
        this.services = data;
      }
    });
    this.serviceService.getServicesPage().subscribe((data: Servicepage) => {
      if (data) {
        this.ser_ceo = data[0];;
        this.titleService.setTitle(this.ser_ceo.ceo_title);
        this.meta.addTags([
          {name: 'description', content: this.ser_ceo.ceo_desc},
          {name: 'keywords', content: this.ser_ceo.ceo_keys}]);
      }
    });
    this.triggerScrollTo();
  }

  public triggerScrollTo() {
    const config: ScrollToConfigOptions = {
      target: 'serv'
    };
    this.scrollToService.scrollTo(config);
  }
}
