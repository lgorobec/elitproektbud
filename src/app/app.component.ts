import {Component, OnDestroy, OnInit} from '@angular/core';
import {LanguageService} from './shared/services/language.service';
import {HomeService} from './shared/services/home.service';
import {Home} from './shared/models/home.model';
import {Meta, Title} from '@angular/platform-browser';
import {Subject} from 'rxjs';
import {first, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {

  unsubscriber$ = new Subject<boolean>();

  constructor(
      public languageService: LanguageService,
      public homeService: HomeService,
      public meta: Meta,
      public titleService: Title,
  ) {}

  ngOnInit(): void {
    this.reloadData();
    this.languageService.selectLang
        .pipe(takeUntil(this.unsubscriber$))
        .subscribe(() => this.reloadData());
  }

  reloadData(): void {
    if (this.languageService.selectLang.value) {
      this.homeService.getHomeSeo()
          .pipe(
              first(),
              takeUntil(this.unsubscriber$),
          ).subscribe((data: Home) => {
            if (data) {
              this.titleService.setTitle(data.home_title);
              this.meta.addTags([
                  { name: 'description', content: data.home_description },
                  { name: 'keywords', content: data.home_keywords },
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
