import { Router } from '@angular/router';
import { DataService } from './../../services/data/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { TCountry } from 'src/app/models/data.model';

@Component({
  selector: 'app-country-item',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.scss'],
})
export class CountryItemComponent implements OnInit {
  @Input() country: TCountry;

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.country)
  }

  goToCountryHolidayDetails({ code, name }) {
    this.dataService.setData(code, { code, name });
    this.router.navigate(['country-holiday-details', code]);
  }

}
