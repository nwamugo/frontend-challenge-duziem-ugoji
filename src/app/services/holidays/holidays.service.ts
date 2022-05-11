import { Injectable } from '@angular/core';

import { HttpService } from '../http/http.service';



@Injectable({
  providedIn: 'root'
})
export class HolidayService {

  private actionUrl = "/holidays"


  constructor(private api: HttpService) { }


  postCountries(input = {}) {
    this.api.setActionUrl(this.actionUrl, '/Countries');
    return this.api.post(input);
  }

  postCountryHolidays(input: {country_code: string, year: number}) {
    this.api.setActionUrl(this.actionUrl, '/List');
    return this.api.post(input)
  }

}