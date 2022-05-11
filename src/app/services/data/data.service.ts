import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data = {};

  constructor() { }

  setData(code, data) {
    this.data[code] = data;
  }

  getData(code) {
    return this.data[code];
  }
}
