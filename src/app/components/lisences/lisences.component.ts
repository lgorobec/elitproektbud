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
    this.galleryOptions = [
      {
        width: '800px',
        height: '600px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
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
    this.galleryImages = [];
    for (let i = 0; i < this.images.length; i++) {
      this.galleryImages.push({
        small: this.images[i],
        medium: this.images[i],
        big: this.images[i]
      });
    }
  }

  reloadData() {
      if (this.languageService.selectLang.value) {
          this.licenceService.getLicences().subscribe((data: Licence) => {
              if (data) {
                  this.licence = data;
                  this.images = this.licence.images.split(';');
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
