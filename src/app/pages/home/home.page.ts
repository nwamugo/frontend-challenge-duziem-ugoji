import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { HolidayService } from '../../services/holidays/holidays.service';

import { TCountry } from '../../models/data.model'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  countries: TCountry[];
  private countriesSub: Subscription

  constructor(private holidayService: HolidayService) {}

  ngOnInit() {
    this.loadCountries();
  }

  loadCountries() {
    this.countriesSub = this.holidayService.postCountries().subscribe(result => {
      if ("countries" in result) {
        this.countries = result.countries
      }
    })
  }

  ngOnDestroy() {
    if (this.countriesSub) {
      this.countriesSub.unsubscribe();
    }
  }

}
