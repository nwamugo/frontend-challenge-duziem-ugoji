import { Config } from '@ionic/angular';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { TCountry, THoliday } from './../../models/data.model';
import { HolidayService } from './../../services/holidays/holidays.service';

@Component({
  selector: 'app-country-holiday-details',
  templateUrl: './country-holiday-details.page.html',
  styleUrls: ['./country-holiday-details.page.scss'],
})
export class CountryHolidayDetailsPage implements OnInit, OnDestroy {
  ios: boolean;
  country: TCountry;
  holidays: THoliday[];
  private holidaysSub: Subscription

  constructor(
    private config: Config,
    private activatedRoute: ActivatedRoute,
    private holidayService: HolidayService
  ) { }

  ngOnInit() {
    this.ios = this.config.get('mode') === 'ios';

    if (this.activatedRoute.snapshot.data['middle']) {
      this.country = this.activatedRoute.snapshot.data['middle'];
      this.loadHolidays(this.country.code);
    }
  }

  loadHolidays(country_code, year = 2022) {
    this.holidaysSub = this.holidayService.postCountryHolidays({country_code, year}).subscribe(result => {
      if ("holidays" in result) {
        this.holidays = result.holidays
      }
    })
  }

  getBackButtonText() {
    return this.ios ? 'Post' : '';
  }

  ngOnDestroy() {
    if (this.holidaysSub) {
      this.holidaysSub.unsubscribe();
    }
  }
}
