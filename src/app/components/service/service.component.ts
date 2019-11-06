import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ServiceService} from '../../shared/services/service.services';
import {Service} from '../../shared/models/service.model';
import {Meta, Title} from '@angular/platform-browser';
import {ScrollToConfigOptions, ScrollToService} from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.less']
})
export class ServiceComponent implements OnInit {

  id = 0;
  service = new Service('', '', '', '', '', '', '', '');

  constructor(public activatedRoute: ActivatedRoute,
              public serviceService: ServiceService,
              public meta: Meta,
              public titleService: Title,
              public scrollToService: ScrollToService) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = parseInt(params.get('id'), 10);
      this.serviceService.getServiceById(this.id).subscribe((data: Service) => {
        if (data) {
          this.service = data[0];
          this.titleService.setTitle(this.service.ceo_title);
          this.meta.addTags([
            {name: 'description', content: this.service.ceo_desc},
            {name: 'keywords', content: this.service.ceo_keys}]);
        }
      });
    });
    this.triggerScrollTo();
  }

  public triggerScrollTo() {
    const config: ScrollToConfigOptions = {
      target: 'servOne'
    };
    this.scrollToService.scrollTo(config);
  }
}
