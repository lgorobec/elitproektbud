import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Service} from '../../shared/models/service.model';
import {ServiceService} from '../../shared/services/service.services';
import {OwlCarousel} from 'ngx-owl-carousel';
import {LanguageService} from '../../shared/services/language.service';
import {first, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.less']
})
export class ServicesListComponent implements OnInit, OnDestroy {

  @ViewChild('owlCarousel', { static: false }) owlCarousel: OwlCarousel;
  unsubscriber$ = new Subject<boolean>();
  services: Service[];
  width = document.body.clientWidth;
  sliderItemsNumber = 4;
  options = {
    items: this.sliderItemsNumber,
    dots: false,
    nav: true,
  };

  constructor(
      public serviceService: ServiceService,
      public languageService: LanguageService,
  ) {}

  ngOnInit(): void {
    this.reloadData();
    this.languageService.selectLang
        .pipe(takeUntil(this.unsubscriber$))
        .subscribe((lang) => this.reloadData());
    this.getOptions();
  }

  mouseWheel(event): void {
    if (this.sliderItemsNumber < this.services.length) {
      event.preventDefault();
      return event.deltaY > 0
          ? this.owlCarousel.previous([500])
          : this.owlCarousel.next([500]);
    }
  }

  getOptions(): void {
    this.sliderItemsNumber = this.width <= 767 ? 1 : (this.width <= 991 ? 3 : 4);
    this.options = {
      items: this.sliderItemsNumber,
      dots: false,
      nav: true,
    };
  }

  reloadData(): void {
    if (this.languageService.selectLang.value) {
      this.serviceService.getServices()
          .pipe(
              first(),
              takeUntil(this.unsubscriber$),
          ).subscribe((data: Service []) => {
            if (data) {
              this.services = data;
            } else {
              this.languageService.setDefaultLang();
            }
      });
    }
  }

  ngOnDestroy(): void {
    this.unsubscriber$.next(true);
    this.unsubscriber$.unsubscribe();
  }
}
