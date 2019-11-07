import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApi} from '../base-api/base-api';
import {Observable} from 'rxjs';
import {Client} from '../models/client.model';

@Injectable()
export class ClientService extends BaseApi {

  constructor(public http: HttpClient) {
    super(http);
  }

  getClients(): Observable <Client> {
    return this.get('clients')
        .map((client: Client[]) => client[0] ? client[0] : undefined);
  }
}
