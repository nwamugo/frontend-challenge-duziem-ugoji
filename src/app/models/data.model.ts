export type TCountry = {
  code: string,
  name: string
}

export type TCountries = {
  countries: TCountry[]
}


export type THolidays = {
  holidays: THoliday[]
}

export type THoliday = {
  date: string,
  name: string,
  local_name: string,
  country_code: string,
  regions: string[],
  types: string[]
}

export type ApiResponse = THolidays | TCountries;