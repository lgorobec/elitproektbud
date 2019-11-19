import { Component, OnInit } from '@angular/core';
import {Obj} from '../../shared/models/object.model';
import {Objectpage} from '../../shared/models/objectpage.model';
import {ObjectService} from '../../shared/services/object.service';
import {ScrollToConfigOptions, ScrollToService} from '@nicky-lenaers/ngx-scroll-to';
import {Meta, Title} from '@angular/platform-browser';
import {LanguageService} from '../../shared/services/language.service';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.less']
})
export class ObjectsComponent implements OnInit {

  objects: Obj[];
  objectCeo = new Objectpage('', '', '', '');

  constructor(public objectService: ObjectService,
              public meta: Meta,
              public titleService: Title,
              public scrollToService: ScrollToService,
              public languageService: LanguageService) { }

  ngOnInit() {
    this.triggerScrollTo();
    this.reloadData();
    this.languageService.selectLang.subscribe(() => {
      this.reloadData();
    });
  }

  public triggerScrollTo() {
    const config: ScrollToConfigOptions = {
      target: 'Objects'
    };
    this.scrollToService.scrollTo(config);
  }

  public reloadData() {
      if (this.languageService.selectLang.value) {
        this.objectService.getObjectPage().subscribe((data: Objectpage) => {
            if (data) {
                this.objectCeo = data;
                this.titleService.setTitle(this.objectCeo.object_title);
                this.meta.addTags([
                    {name: 'description', content: this.objectCeo.object_description},
                    {name: 'keywords', content: this.objectCeo.object_description}]);
            }
        });
        this.objectService.getObjects().subscribe((data: Obj[]) => {
            if (data) {
                this.objects = data;
            }
        });
      }
  }
}
