import { Component, OnInit } from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';
import {ScrollToConfigOptions, ScrollToService} from '@nicky-lenaers/ngx-scroll-to';
import {Licence} from '../../shared/models/licence.model';
import {LicenceService} from '../../shared/services/licence.service';
import {LanguageService} from '../../shared/services/language.service';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-lisences',
  templateUrl: './lisences.component.html',
  styleUrls: ['./lisences.component.less']
})
export class LisencesComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  licence: Licence;
  images = [];

  constructor(public scrollToService: ScrollToService,
              public licenceService: LicenceService,
              public languageService: LanguageService,
              public meta: Meta,
              public titleService: Title) { }

  ngOnInit() {
    this.triggerScrollTo();
    this.reloadData();
    this.languageService.selectLang.subscribe(() => {
        this.reloadData();
    });
    }

  public triggerScrollTo() {
    const config: ScrollToConfigOptions = {
      target: 'lic'
    };
    this.scrollToService.scrollTo(config);
  }

  public getGalleryOptions() {
    this.galleryImages = [];
    for (const image of this.images) {
      this.galleryImages.push({
        small: image,
        medium: image,
        big: image
      });
    }
    this.galleryOptions = [
      {
          width: '800px',
          height: '600px',
          thumbnailsColumns: this.galleryImages.length > 1 ? 4 : 0,
          imageAnimation: NgxGalleryAnimation.Slide,
          thumbnails: this.galleryImages.length > 1 ? true : false
      },
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      {
          breakpoint: 400,
          preview: false
      }
    ];
  }

  reloadData() {
    if (this.languageService.selectLang.value) {
      this.licenceService.getLicences().subscribe((data: Licence) => {
        if (data) {
          this.licence = data;
          this.images = [this.licence.images.split(';')[0]];
          this.titleService.setTitle(this.licence.title);
          this.meta.addTags([
            {name: 'description', content: this.licence.description},
            {name: 'keywords', content: this.licence.keywords}]);
          this.getGalleryOptions();
        }
      });
    }
  }
}
