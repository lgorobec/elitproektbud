import { Component, OnInit } from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';
import {ScrollToConfigOptions, ScrollToService} from '@nicky-lenaers/ngx-scroll-to';
import {Licence} from '../../shared/models/licence.model';
import {LicenceService} from '../../shared/services/licence.service';

@Component({
  selector: 'app-lisences',
  templateUrl: './lisences.component.html',
  styleUrls: ['./lisences.component.less']
})
export class LisencesComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  licences: Licence[];

  constructor(public scrollToService: ScrollToService,
              public licenceService: LicenceService) { }

  ngOnInit() {
    this.triggerScrollTo();
    this.licenceService.getLicences().subscribe((data: Licence[]) => {
      if (data[0]) {
        this.licences = data.splice(0, 1);
        this.getGalleryOptions();
      }
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
    for (let i = 0; i < this.licences.length; i++) {
      this.galleryImages.push({
        small: '../../assets/img/' + this.licences[i].img,
        medium: '../../assets/img/' + this.licences[i].img,
        big: '../../assets/img/' + this.licences[i].img
      });
    }
  }
}
