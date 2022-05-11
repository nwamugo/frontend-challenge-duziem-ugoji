import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { CountryHolidayDetailsPageRoutingModule } from './country-holiday-details-routing.module';
import { ComponentsModule } from './../../components/components.module';

import { CountryHolidayDetailsPage } from './country-holiday-details.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule,
    CountryHolidayDetailsPageRoutingModule
  ],
  declarations: [CountryHolidayDetailsPage]
})
export class CountryHolidayDetailsPageModule {}
