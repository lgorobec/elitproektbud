import { Component, OnInit } from '@angular/core';
import {Object} from '../../shared/models/object.model';
import {Objectpage} from '../../shared/models/objectpage.model';
import {ObjectService} from '../../shared/services/object.service';
import {ScrollToConfigOptions, ScrollToService} from '@nicky-lenaers/ngx-scroll-to';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.less']
})
export class ObjectsComponent implements OnInit {

  objects: Object[];
  objectCeo = new Objectpage('', '', '');

  constructor(public objectService: ObjectService,
              public meta: Meta,
              public titleService: Title,
              public scrollToService: ScrollToService) { }

  ngOnInit() {
    this.triggerScrollTo()
    this.objectService.getObjectPage().subscribe((data: Objectpage) => {
      if (data) {
        this.objectCeo = data[0];
        this.titleService.setTitle(this.objectCeo.ceo_title);
        this.meta.addTags([
          {name: 'description', content: this.objectCeo.ceo_desc},
          {name: 'keywords', content: this.objectCeo.ceo_keys}]);
      }
    });
    this.objectService.getObjects().subscribe((data: Object[]) => {
      if (data) {
        this.objects = data;
      }
    });
  }

  public triggerScrollTo() {
    const config: ScrollToConfigOptions = {
      target: 'Objects'
    };
    this.scrollToService.scrollTo(config);
  }
}
