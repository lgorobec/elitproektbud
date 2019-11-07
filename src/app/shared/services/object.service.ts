import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApi} from '../base-api/base-api';
import {Observable} from 'rxjs';
import {Obj} from '../models/object.model';
import {Objectpage} from '../models/objectpage.model';

@Injectable()
export class ObjectService extends BaseApi {

  constructor(public http: HttpClient) {
    super(http);
  }

  getObjects(): Observable <Obj[]> {
    return this.get('objects');
  }

  getObjectPage(): Observable <Objectpage> {
    return this.get('objectsPage')
        .map((obj: Objectpage[]) => obj[0] ? obj[0] : undefined);
  }

  getObjectById(id: number): Observable <Obj> {
    return this.get(`objects?id=${id}`)
        .map((obj: Obj[]) => obj[0] ? obj[0] : undefined);
  }
}
