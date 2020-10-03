// Action types
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'
export const SEARCH_COUNTRY = 'SEARCH_COUNTRY'
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES'

export type SetCountriesAction = {
  type: typeof FETCH_COUNTRIES
  payload: {
    countries: Country[]
  }
}

export type CountriesState = cartState & countryState

export type cartState = {
  inCart: Country[]
}
export type countryState = {
  countries: Country[]
}

export type Country = {
  name: string
  region: string
  population: number
  flag: string
  languages: Language[]
  id: number | undefined
  nativeName: string
}

export type Countries = Country[]

export type Language = {
  name: string
}

export type AddCountryAction = {
  type: typeof ADD_COUNTRY
  payload: {
    country: Country
  }
}

export type RemoveCountryAction = {
  type: typeof REMOVE_COUNTRY
  payload: {
    country: Country
  }
}

export type searchCountryAction = {
  type: typeof SEARCH_COUNTRY
  payload: {
    countries: Country[]
  }
}

// Use this union in reducer
export type CountryActions =
  | AddCountryAction
  | RemoveCountryAction
  | SetCountriesAction
  | searchCountryAction

export type AppState = {
  countries: CountriesState
}
