import {Component, OnDestroy, OnInit} from '@angular/core';
import {AboutService} from '../../shared/services/about.service';
import {Meta, Title} from '@angular/platform-browser';
import {About} from '../../shared/models/about.model';
import {ScrollToConfigOptions, ScrollToService} from '@nicky-lenaers/ngx-scroll-to';
import {LanguageService} from '../../shared/services/language.service';
import {Subject} from 'rxjs';
import {first, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-about-company',
  templateUrl: './about-company.component.html',
  styleUrls: ['./about-company.component.less']
})
export class AboutCompanyComponent implements OnInit, OnDestroy {

  about = new About();
  unsubscriber$ = new Subject<boolean>();

  constructor(
      public aboutService: AboutService,
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
        .subscribe(() => this.reloadData());
  }

  triggerScrollTo(): void {
    const config: ScrollToConfigOptions = { target: 'aboutCompany' };
    this.scrollToService.scrollTo(config);
  }

  reloadData(): void {
    if (this.languageService.selectLang.value) {
      this.aboutService.getAbout()
          .pipe(
            first(),
            takeUntil(this.unsubscriber$),
          ).subscribe((data: About) => {
            this.about = data;
            this.titleService.setTitle(this.about.about_title);
            this.meta.addTags([
                { name: 'description', content: this.about.about_description },
                { name: 'keywords', content: this.about.about_keywords },
            ]);
    });
    }
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next(true);
    this.unsubscriber$.unsubscribe();
  }
}
