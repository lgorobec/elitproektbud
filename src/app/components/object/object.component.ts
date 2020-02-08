import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ScrollToConfigOptions, ScrollToService} from '@nicky-lenaers/ngx-scroll-to';
import {Meta, Title} from '@angular/platform-browser';
import {ObjectService} from '../../shared/services/object.service';
import {Obj} from '../../shared/models/object.model';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';
import {LanguageService} from '../../shared/services/language.service';
import {Subject} from 'rxjs';
import {first, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.less']
})
export class ObjectComponent implements OnInit, OnDestroy {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  id: number;
  images = [];
  object = new Obj();
  unsubscriber$ = new Subject<boolean>();

  constructor(
      public activatedRoute: ActivatedRoute,
      public objectService: ObjectService,
      public meta: Meta,
      public titleService: Title,
      public scrollToService: ScrollToService,
      public languageService: LanguageService,
  ) { }

  ngOnInit(): void {
    this.triggerScrollTo();
    this.activatedRoute.paramMap
        .pipe(takeUntil(this.unsubscriber$))
        .subscribe(params => {
          this.id = +params.get('id');
          this.reloadData();
    });
    this.languageService.selectLang
        .pipe(takeUntil(this.unsubscriber$))
        .subscribe(() => this.reloadData());
  }

  triggerScrollTo(): void {
    const config: ScrollToConfigOptions = { target: 'objectOne' };
    this.scrollToService.scrollTo(config);
  }

  getGalleryOptions(): void {
    this.galleryImages = [];
    for (const img of this.images) {
      this.galleryImages.push({
          small: img,
          medium: img,
          big: img,
      });
    }
    this.galleryOptions = [
      {
        width: '800px',
        height: '600px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
      },
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
      },
      {
        breakpoint: 400,
        preview: false,
      }
    ];
  }

  reloadData(): void {
    if (this.languageService.selectLang.value) {
      this.objectService.getObjectById(this.id)
          .pipe(
              first(),
              takeUntil(this.unsubscriber$),
          ).subscribe((data: Obj) => {
            if (data) {
              this.object = data;
              this.images = this.object.images.split(';');
              this.titleService.setTitle(this.object.title);
              this.meta.addTags([
                  { name: 'description', content: this.object.description },
                  { name: 'keywords', content: this.object.keywords },
              ]);
              this.getGalleryOptions();
            }
      });
    }
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next(true);
    this.unsubscriber$.unsubscribe();
  }
}
