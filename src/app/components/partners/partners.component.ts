import {Component, OnDestroy, OnInit} from '@angular/core';
import {PartnerService} from '../../shared/services/partner.service';
import {Partner} from '../../shared/models/partner.model';
import {Partnerpage} from '../../shared/models/partnerpage.model';
import {ScrollToConfigOptions, ScrollToService} from '@nicky-lenaers/ngx-scroll-to';
import {Meta, Title} from '@angular/platform-browser';
import {LanguageService} from '../../shared/services/language.service';
import {Subject} from 'rxjs';
import {first, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.less']
})
export class PartnersComponent implements OnInit, OnDestroy {

  partners: Partner[];
  pageCeo = new Partnerpage();
  unsubscriber$ = new Subject<boolean>();

  constructor(
      public partnersService: PartnerService,
      public meta: Meta,
      public titleService: Title,
      public scrollToService: ScrollToService,
      public languageService: LanguageService,
  ) { }

  ngOnInit(): void {
    this.triggerScrollTo();
    this.reloadData();
    this.languageService.selectLang
        .pipe(takeUntil(this.unsubscriber$))
        .subscribe((lang) => this.reloadData());
  }

  triggerScrollTo(): void {
    const config: ScrollToConfigOptions = { target: 'Partners' };
    this.scrollToService.scrollTo(config);
  }

  reloadData(): void {
    if (this.languageService.selectLang.value) {
      this.partnersService.getPartners()
          .pipe(
            first(),
            takeUntil(this.unsubscriber$),
          ).subscribe((data: Partner[]) => {
            if (data) {
              this.partners = data;
            }
      });
      this.partnersService.getPartnersPage()
          .pipe(
            first(),
            takeUntil(this.unsubscriber$),
          ).subscribe((data: Partnerpage) => {
            if (data) {
              this.pageCeo = data;
              this.titleService.setTitle(this.pageCeo.partner_title);
              this.meta.addTags([
                  { name: 'description', content: this.pageCeo.partner_description },
                  { name: 'keywords', content: this.pageCeo.partner_keywords },
              ]);
            }
      });
    }
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next(true);
    this.unsubscriber$.unsubscribe();
  }
}
