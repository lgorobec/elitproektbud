import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApi} from '../base-api/base-api';
import {Observable} from 'rxjs';
import {About} from '../models/about.model';

@Injectable()
export class AboutService extends BaseApi {

  constructor(public http: HttpClient) {
    super(http);
  }

  getAbout(): Observable <About> {
    return this.get('about')
        .map((about: About[]) => about[0] ? about[0] : undefined);
  }
}
