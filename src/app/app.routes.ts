import { Routes } from '@angular/router';
import { ChargeComponent } from './charge-component/charge-component.component';
import { ServiceFacilityComponent } from './service-facility/service-facility.component';
import { HmoComponent } from './hmo-component/hmo.component';

export const routes: Routes = [
  { path: 'charge', component: ChargeComponent },
  { path: 'service-facility', component: ServiceFacilityComponent },
  { path: 'hmo-information', component: HmoComponent },
];
