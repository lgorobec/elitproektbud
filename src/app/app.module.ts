import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSelectModule, MatSidenavModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { OwlModule } from 'ngx-owl-carousel';
import { NgxGalleryModule } from 'ngx-gallery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutCompanyComponent } from './components/about-company/about-company.component';
import { ServicesComponent } from './components/services/services.component';
import { LisencesComponent } from './components/lisences/lisences.component';
import { PartnersComponent } from './components/partners/partners.component';
import { ObjectsComponent } from './components/objects/objects.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SliderComponent } from './shared/components/slider/slider.component';
import { ServiceComponent } from './components/service/service.component';
import { ObjectComponent } from './components/object/object.component';
import { SlideService } from './shared/services/slide.service';
import { RequestService } from './shared/services/request.service';
import { ServiceService } from './shared/services/service.services';
import { HomeService } from './shared/services/home.service';
import { LanguageService } from './shared/services/language.service';
import { ClientsComponent } from './shared/components/clients/clients.component';
import { ClientService } from './shared/services/client.service';
import { AboutService } from './shared/services/about.service';
import { ScrollToModule, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { LicenceService } from './shared/services/licence.service';
import { ObjectService } from './shared/services/object.service';
import { PartnerService } from './shared/services/partner.service';
import { ContactsService } from './shared/services/contacts.service';
import { ServicesListComponent } from './components/services-list/services-list.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    AboutCompanyComponent,
    ServicesComponent,
    LisencesComponent,
    PartnersComponent,
    ObjectsComponent,
    ContactsComponent,
    MenuComponent,
    FooterComponent,
    SliderComponent,
    ServiceComponent,
    ObjectComponent,
    ClientsComponent,
    ServicesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    NgbModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    NgxGalleryModule,
    ScrollToModule.forRoot(),
    MatSidenavModule,
    OwlModule
  ],
  entryComponents: [
    AboutCompanyComponent,
    ServicesComponent,
    LisencesComponent,
    PartnersComponent,
    ObjectsComponent,
    ContactsComponent,
    ServiceComponent,
    ClientsComponent
  ],
  providers: [
    SlideService,
    RequestService,
    ServiceService,
    HomeService,
    HttpClient,
    LanguageService,
    ClientService,
    AboutService,
    ScrollToService,
    LicenceService,
    ObjectService,
    PartnerService,
    ContactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
