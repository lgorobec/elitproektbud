import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ScrollToConfigOptions, ScrollToService} from '@nicky-lenaers/ngx-scroll-to';
import {Meta, Title} from '@angular/platform-browser';
import {ObjectService} from '../../shared/services/object.service';
import {Obj} from '../../shared/models/object.model';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';
import {LanguageService} from '../../shared/services/language.service';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.less']
})
export class ObjectComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  id: number;
  galleryImages: NgxGalleryImage[];
  object = new Obj('', '', [], '', '', '', '');

  constructor(public activatedRoute: ActivatedRoute,
              public objectService: ObjectService,
              public meta: Meta,
              public titleService: Title,
              public scrollToService: ScrollToService,
              public languageService: LanguageService) { }

  ngOnInit() {
    this.triggerScrollTo();
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = parseInt(params.get('id'), 10);
      this.reloadData();
    });
    this.languageService.selectLang.subscribe((lang) => {
      this.reloadData();
    });
  }

  public triggerScrollTo() {
    const config: ScrollToConfigOptions = {
      target: 'objectOne'
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
    for (let i = 0; i < this.object.images.length; i++) {
      this.galleryImages.push({
        small: '../../assets/img/' + this.object.images[i],
        medium: '../../assets/img/' + this.object.images[i],
        big: '../../assets/img/' + this.object.images[i]
      });
    }
  }

  public reloadData() {
      this.objectService.getObjectById(this.id).subscribe((data: Obj) => {
          if (data) {
              this.object = data;
              this.titleService.setTitle(this.object.ceo_title);
              this.meta.addTags([
                  {name: 'description', content: this.object.ceo_desc},
                  {name: 'keywords', content: this.object.ceo_keys}]);
              this.getGalleryOptions();
          }
      });
  }
}
