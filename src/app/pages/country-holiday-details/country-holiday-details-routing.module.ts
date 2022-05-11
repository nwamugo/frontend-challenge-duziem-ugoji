import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryHolidayDetailsPage } from './country-holiday-details.page';

const routes: Routes = [
  {
    path: '',
    component: CountryHolidayDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryHolidayDetailsPageRoutingModule {}
