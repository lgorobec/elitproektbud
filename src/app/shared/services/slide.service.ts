import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApi} from '../base-api/base-api';
import {Observable} from 'rxjs';
import {Slide} from '../models/slide.model';

@Injectable()
export class SlideService extends BaseApi {

  constructor(public http: HttpClient) {
    super(http);
  }

  getSlides(): Observable <Slide> {
    return this.get('slides')
        .map((slide: Slide[]) => slide[0] ? slide[0] : undefined);
  }
}
