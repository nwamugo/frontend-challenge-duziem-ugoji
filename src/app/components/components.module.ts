import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { CountryItemComponent } from './country-item/country-item.component';
import { HolidayItemComponent } from './holiday-item/holiday-item.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [
    CountryItemComponent,
    HolidayItemComponent
  ],
  exports: [
    CountryItemComponent,
    HolidayItemComponent
  ],
  entryComponents: [],
})
export class ComponentsModule {}
