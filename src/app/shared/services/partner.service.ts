import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApi} from '../base-api/base-api';
import {Observable} from 'rxjs';
import {Partner} from '../models/partner.model';
import {Partnerpage} from '../models/partnerpage.model';
import {LanguageService} from './language.service';

@Injectable()
export class PartnerService extends BaseApi {

  constructor(public http: HttpClient,
              public languageService: LanguageService) {
    super(http);
  }

  getPartners(): Observable <Partner[]> {
    return this.get(`partners/${this.languageService.selectLang.value}`)
        .map((part: Partner[][]) => part[0] ? part[0] : undefined);
  }

  getPartnersPage(): Observable <Partnerpage> {
    return this.get(`partners/${this.languageService.selectLang.value}/seo`)
        .map((partner: Partnerpage[]) => partner[0] ? partner[0] : undefined);
  }
}
