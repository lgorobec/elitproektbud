import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApi} from '../base-api/base-api';
import {Observable} from 'rxjs';
import {Contact} from '../models/contacts.model';

@Injectable()
export class ContactsService extends BaseApi {

  constructor(public http: HttpClient) {
    super(http);
  }

  getContacts(): Observable <Contact> {
    return this.get('contacts')
        .map((con: Contact[]) => con[0] ? con[0] : undefined);
  }
}
