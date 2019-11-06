import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApi} from '../base-api/base-api';
import {Observable} from 'rxjs';
import {Licence} from '../models/licence.model';

@Injectable()
export class LicenceService extends BaseApi {

  constructor(public http: HttpClient) {
    super(http);
  }

  getLicences(): Observable <Licence[]> {
    return this.get('licences');
  }
}
