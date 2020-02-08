import {Component, OnDestroy, OnInit} from '@angular/core';
import {Obj} from '../../shared/models/object.model';
import {Objectpage} from '../../shared/models/objectpage.model';
import {ObjectService} from '../../shared/services/object.service';
import {ScrollToConfigOptions, ScrollToService} from '@nicky-lenaers/ngx-scroll-to';
import {Meta, Title} from '@angular/platform-browser';
import {LanguageService} from '../../shared/services/language.service';
import {Subject} from 'rxjs';
import {first, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.less']
})
export class ObjectsComponent implements OnInit, OnDestroy {

  objects: Obj[];
  objectCeo = new Objectpage();
  unsubscriber$ = new Subject<boolean>();

  constructor(
      public objectService: ObjectService,
      public meta: Meta,
      public titleService: Title,
      public scrollToService: ScrollToService,
      public languageService: LanguageService,
  ) {}

  ngOnInit(): void {
    this.triggerScrollTo();
    this.reloadData();
    this.languageService.selectLang
        .pipe(takeUntil(this.unsubscriber$))
        .subscribe(() => this.reloadData());
  }

  triggerScrollTo(): void {
    const config: ScrollToConfigOptions = { target: 'Objects' };
    this.scrollToService.scrollTo(config);
  }

  reloadData(): void {
    if (this.languageService.selectLang.value) {
      this.objectService.getObjectPage()
          .pipe(
            first(),
            takeUntil(this.unsubscriber$),
          )
          .subscribe((data: Objectpage) => {
            if (data) {
              this.objectCeo = data;
              this.titleService.setTitle(this.objectCeo.object_title);
              this.meta.addTags([
                  { name: 'description', content: this.objectCeo.object_description },
                  { name: 'keywords', content: this.objectCeo.object_description },
              ]);
            }
      });
      this.objectService.getObjects()
          .pipe(
            first(),
            takeUntil(this.unsubscriber$),
          ).subscribe((data: Obj[]) => {
            if (data) {
                this.objects = data;
            }
      });
    }
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next(true);
    this.unsubscriber$.unsubscribe();
  }
}
