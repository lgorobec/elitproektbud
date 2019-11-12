import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LisencesComponent } from './components/lisences/lisences.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutCompanyComponent } from './components/about-company/about-company.component';
import { ServiceComponent } from './components/service/service.component';
import { PartnersComponent } from './components/partners/partners.component';
import { ObjectsComponent } from './components/objects/objects.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ObjectComponent } from './components/object/object.component';
import { SliderComponent } from './shared/components/slider/slider.component';


const routes: Routes = [
  {
    path: 'home',
    component: SliderComponent
  },
  {
    path: 'about-us',
    component: AboutCompanyComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'service/:id',
    component: ServiceComponent
  },
  {
    path: 'lisences',
    component: LisencesComponent
  },
  {
    path: 'partners',
    component: PartnersComponent
  },
  {
    path: 'objects',
    component: ObjectsComponent
  },
  {
    path: 'object/:id',
    component: ObjectComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
