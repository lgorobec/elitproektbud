import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApi} from '../base-api/base-api';
import {Observable} from 'rxjs';
import {Home} from '../models/home.model';

@Injectable()
export class HomeService extends BaseApi {

  constructor(public http: HttpClient) {
    super(http);
  }

  getHome(): Observable <Home[]> {
    return this.get('home');
  }
}
