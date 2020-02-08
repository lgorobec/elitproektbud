import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ServiceService} from '../../shared/services/service.services';
import {Service} from '../../shared/models/service.model';
import {Meta, Title} from '@angular/platform-browser';
import {ScrollToConfigOptions, ScrollToService} from '@nicky-lenaers/ngx-scroll-to';
import {LanguageService} from '../../shared/services/language.service';
import {Subject} from 'rxjs';
import {first, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.less']
})
export class ServiceComponent implements OnInit, OnDestroy {

  id = 0;
  service = new Service('', '', '', '', '', '', '', '', '', '', '');
  unsubscriber$ = new Subject<boolean>();

  constructor(
      public activatedRoute: ActivatedRoute,
      public serviceService: ServiceService,
      public meta: Meta,
      public titleService: Title,
      public scrollToService: ScrollToService,
      public languageService: LanguageService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
        .pipe(takeUntil(this.unsubscriber$))
        .subscribe(params => {
          this.id = +params.get('id');
          this.reloadData();
    });
    this.triggerScrollTo();
    this.languageService.selectLang
        .pipe(takeUntil(this.unsubscriber$))
        .subscribe(() => this.reloadData());
  }

  triggerScrollTo(): void {
    const config: ScrollToConfigOptions = { target: 'servOne' };
    this.scrollToService.scrollTo(config);
  }

  reloadData(): void {
    if (this.languageService.selectLang.value) {
      this.serviceService.getServiceById(this.id)
          .pipe(
              first(),
              takeUntil(this.unsubscriber$),
          ).subscribe((data: Service) => {
            if (data) {
              this.service = data;
              this.titleService.setTitle(this.service.title);
              this.meta.addTags([
                  { name: 'description', content: this.service.description },
                  { name: 'keywords', content: this.service.keywords },
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
