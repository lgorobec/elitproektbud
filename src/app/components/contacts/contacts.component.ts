import { Component, OnInit } from '@angular/core';
import {ScrollToConfigOptions, ScrollToService} from '@nicky-lenaers/ngx-scroll-to';
import {Meta, Title} from '@angular/platform-browser';
import {ContactsService} from '../../shared/services/contacts.service';
import {Contact} from '../../shared/models/contacts.model';
import {LanguageService} from '../../shared/services/language.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less']
})
export class ContactsComponent implements OnInit {

  contacts = new Contact('', '', '', '', '', '');

  constructor(public meta: Meta,
              public titleService: Title,
              public scrollToService: ScrollToService,
              public contactsService: ContactsService,
              public languageServices: LanguageService) { }

  ngOnInit() {
    this.triggerScrollTo();
    this.reloadData();
    this.languageServices.selectLang.subscribe(() => this.reloadData());
  }

  public triggerScrollTo() {
    const config: ScrollToConfigOptions = {
      target: 'Contacts'
    };
    this.scrollToService.scrollTo(config);
  }

  public reloadData() {
    if (this.languageServices.selectLang.value) {
      this.contactsService.getContacts().subscribe((data: Contact) => {
        if (data) {
          this.contacts = data;
          this.titleService.setTitle(this.contacts.contacts_title);
          this.meta.addTags([
            { name: 'description', content: this.contacts.contacts_description },
            { name: 'keywords', content: this.contacts.contacts_keywords }]
          );
        }
      });
    }
  }
}
