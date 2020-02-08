import { Component, OnDestroy, OnInit } from '@angular/core';
import {Service} from '../../shared/models/service.model';
import {ServiceService} from '../../shared/services/service.services';
import {Servicepage} from '../../shared/models/servicepage.model';
import {Meta, Title} from '@angular/platform-browser';
import {ScrollToConfigOptions, ScrollToService} from '@nicky-lenaers/ngx-scroll-to';
import {LanguageService} from '../../shared/services/language.service';
import { Subject } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.less']
})
export class ServicesComponent implements OnInit, OnDestroy {

  services: Service[];
  serCeo: Servicepage;
  unsubscriber$ = new Subject<boolean>();

  constructor(
      public serviceService: ServiceService,
      public meta: Meta,
      public titleService: Title,
      public scrollToService: ScrollToService,
      public languageService: LanguageService,
  ) {}

  ngOnInit(): void {
    this.reloadData();
    this.languageService.selectLang
        .pipe(takeUntil(this.unsubscriber$))
        .subscribe(() => this.reloadData());
    this.triggerScrollTo();
  }

  triggerScrollTo(): void {
    const config: ScrollToConfigOptions = { target: 'serv' };
    this.scrollToService.scrollTo(config);
  }

  reloadData(): void {
    if (this.languageService.selectLang.value) {
      this.serviceService.getServices()
          .pipe(
            first(),
            takeUntil(this.unsubscriber$),
          ).subscribe((data: Service[]) => {
            if (data) {
              this.services = data;
            } else {
              this.languageService.setDefaultLang();
            }
      });
      this.serviceService.getServicesPage()
          .pipe(
            first(),
            takeUntil(this.unsubscriber$),
          ).subscribe((data: Servicepage) => {
            if (data) {
              this.serCeo = data;
              this.titleService.setTitle(this.serCeo.service_title);
              this.meta.addTags([
                  { name: 'description', content: this.serCeo.service_description },
                  { name: 'keywords', content: this.serCeo.service_keywords },
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
