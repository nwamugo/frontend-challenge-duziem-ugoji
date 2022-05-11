import { Component, OnInit, Input } from '@angular/core';
import { THoliday } from 'src/app/models/data.model';

@Component({
  selector: 'app-holiday-item',
  templateUrl: './holiday-item.component.html',
  styleUrls: ['./holiday-item.component.scss'],
})
export class HolidayItemComponent implements OnInit {
  @Input() holiday: THoliday;

  constructor() { }

  ngOnInit() {
    console.log(this.holiday)
  }
}
