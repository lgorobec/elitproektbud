import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApi} from '../base-api/base-api';
import {Observable} from 'rxjs';
import {Requestt} from '../models/requestt.model';

@Injectable()
export class RequestService extends BaseApi {

  constructor(public http: HttpClient) {
    super(http);
  }

  addRequest(req: Requestt): Observable <Requestt> {
    return this.post('requests', req);
  }
}
