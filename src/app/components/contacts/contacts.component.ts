import {Component, OnDestroy, OnInit} from '@angular/core';
import {ScrollToConfigOptions, ScrollToService} from '@nicky-lenaers/ngx-scroll-to';
import {Meta, Title} from '@angular/platform-browser';
import {ContactsService} from '../../shared/services/contacts.service';
import {Contact} from '../../shared/models/contacts.model';
import {LanguageService} from '../../shared/services/language.service';
import {Subject} from 'rxjs';
import {first, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less']
})
export class ContactsComponent implements OnInit, OnDestroy {

  contacts = new Contact();
  unsubscriber$ = new Subject<boolean>();

  constructor(
      public meta: Meta,
      public titleService: Title,
      public scrollToService: ScrollToService,
      public contactsService: ContactsService,
      public languageServices: LanguageService,
  ) {}

  ngOnInit(): void {
    this.triggerScrollTo();
    this.reloadData();
    this.languageServices.selectLang
        .pipe(takeUntil(this.unsubscriber$))
        .subscribe(() => this.reloadData());
  }

  triggerScrollTo(): void {
    const config: ScrollToConfigOptions = { target: 'Contacts' };
    this.scrollToService.scrollTo(config);
  }

  reloadData(): void {
    if (this.languageServices.selectLang.value) {
      this.contactsService.getContacts()
          .pipe(
            first(),
            takeUntil(this.unsubscriber$),
          ).subscribe((data: Contact) => {
            if (data) {
              this.contacts = data;
              this.titleService.setTitle(this.contacts.contacts_title);
              this.meta.addTags([
                  { name: 'description', content: this.contacts.contacts_description },
                  { name: 'keywords', content: this.contacts.contacts_keywords },
              ]);
            }
      });
    }
  }
  ngOnDestroy(): void {
    this.unsubscriber$.next(true);
    this.unsubscriber$.unsubscribe();
  }
}
