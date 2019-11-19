import { Component, OnInit } from '@angular/core';
import {PartnerService} from '../../shared/services/partner.service';
import {Partner} from '../../shared/models/partner.model';
import {Partnerpage} from '../../shared/models/partnerpage.model';
import {ScrollToConfigOptions, ScrollToService} from '@nicky-lenaers/ngx-scroll-to';
import {Meta, Title} from '@angular/platform-browser';
import {LanguageService} from '../../shared/services/language.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.less']
})
export class PartnersComponent implements OnInit {

  partners: Partner[];
  pageCeo = new Partnerpage('', '', '', '');

  constructor(public partnersService: PartnerService,
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
      target: 'Partners'
    };
    this.scrollToService.scrollTo(config);
  }

  public reloadData() {
      if (this.languageService.selectLang.value) {
          this.partnersService.getPartners().subscribe((data: Partner[]) => {
              if (data) {
                  this.partners = data;
              }
          });
          this.partnersService.getPartnersPage().subscribe((data: Partnerpage) => {
              if (data) {
                  this.pageCeo = data;
                  this.titleService.setTitle(this.pageCeo.partner_title);
                  this.meta.addTags([
                      {name: 'description', content: this.pageCeo.partner_description},
                      {name: 'keywords', content: this.pageCeo.partner_keywords}]);
              }
          });
      }
  }
}
