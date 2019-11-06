import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApi} from '../base-api/base-api';
import {Observable} from 'rxjs';
import {Object} from '../models/object.model';
import {Objectpage} from '../models/objectpage.model';

@Injectable()
export class ObjectService extends BaseApi {

  constructor(public http: HttpClient) {
    super(http);
  }

  getObjects(): Observable <Object[]> {
    return this.get('objects');
  }

  getObjectPage(): Observable <Objectpage> {
    return this.get('objectsPage');
  }

  getObjectById(id: number): Observable <Object> {
    return this.get(`objects?id=${id}`);
  }
}
