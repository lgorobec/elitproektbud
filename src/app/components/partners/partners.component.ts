import { Component, OnInit } from '@angular/core';
import {PartnerService} from '../../shared/services/partner.service';
import {Partner} from '../../shared/models/partner.model';
import {Partnerpage} from '../../shared/models/partnerpage.model';
import {ScrollToConfigOptions, ScrollToService} from '@nicky-lenaers/ngx-scroll-to';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.less']
})
export class PartnersComponent implements OnInit {

  partners: Partner[];
  pageCeo = new Partnerpage('', '', '');

  constructor(public partnersService: PartnerService,
              public meta: Meta,
              public titleService: Title,
              public scrollToService: ScrollToService) { }

  ngOnInit() {
    this.triggerScrollTo();
    this.partnersService.getPartners().subscribe((data: Partner[]) => {
      if (data) {
        this.partners = data;
      }
    });
    this.partnersService.getPartnersPage().subscribe((data: Partnerpage) => {
      if (data) {
        this.pageCeo = data[0];
        this.titleService.setTitle(this.pageCeo.ceo_title);
        this.meta.addTags([
          {name: 'description', content: this.pageCeo.ceo_desc},
          {name: 'keywords', content: this.pageCeo.ceo_keys}]);
      }
    });
  }

  public triggerScrollTo() {
    const config: ScrollToConfigOptions = {
      target: 'Partners'
    };
    this.scrollToService.scrollTo(config);
  }
}
