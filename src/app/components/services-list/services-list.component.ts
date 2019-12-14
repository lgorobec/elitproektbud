import {Component, OnInit, ViewChild} from '@angular/core';
import {Service} from '../../shared/models/service.model';
import {ServiceService} from '../../shared/services/service.services';
import {OwlCarousel} from 'ngx-owl-carousel';
import {LanguageService} from '../../shared/services/language.service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.less']
})
export class ServicesListComponent implements OnInit {

  @ViewChild('owlCarousel', {static: false}) owlCarousel: OwlCarousel;
  services: Service[];
  width = document.body.clientWidth;
  sliderItemsNumber = 4;
  options = {items: this.sliderItemsNumber, dots: false, nav: true};

  constructor(public serviceService: ServiceService,
              public languageService: LanguageService) { }

  ngOnInit() {
    this.reloadData();
    this.languageService.selectLang.subscribe((lang) => {
      this.reloadData();
    });
    this.getOptions();
  }

  mouseWheel(e) {
    if (this.sliderItemsNumber < this.services.length) {
        if (e.deltaY > 0) {
            this.owlCarousel.previous([500]);
        } else {
            this.owlCarousel.next([500]);
        }
        e.preventDefault();
    }
  }

  getOptions() {
    if (this.width <= 767) {
      this.sliderItemsNumber = 1;
      this.options = {items: this.sliderItemsNumber, dots: false, nav: true};
    } else if (this.width <= 991) {
      this.sliderItemsNumber = 3;
      this.options = {items: this.sliderItemsNumber, dots: false, nav: true};
    }
  }

  public reloadData() {
    if (this.languageService.selectLang.value) {
        this.serviceService.getServices().subscribe((data: Service []) => {
            if (data) {
                this.services = data;
            } else {
                this.languageService.setDefaultLang();
            }
        });
    }
  }
}
