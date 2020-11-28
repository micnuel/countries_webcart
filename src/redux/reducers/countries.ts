import {
  FETCH_COUNTRIES,
  CountriesState,
  ADD_COUNTRY,
  CountryActions,
  REMOVE_COUNTRY,
  SEARCH_COUNTRY,
} from '../../types'

export default function countries(
  state: CountriesState = {
    countries: [],
    inCart: [],
  },
  action: CountryActions
): CountriesState {
  switch (action.type) {
  case FETCH_COUNTRIES: {
    const { countries } = action.payload
    return { ...state, countries: [...countries] }
  }

  case SEARCH_COUNTRY: {
    const { countries } = action.payload
    return { ...state, countries: [...countries] }
  }

  case ADD_COUNTRY: {
    const { country } = action.payload
    if (state.inCart.find((p) => p.id == country.id)) {
      return state
    }
    return { ...state, inCart: [...state.inCart, country] }
  }
  case REMOVE_COUNTRY: {
    const { country } = action.payload
    const index = state.inCart.findIndex((p) => p.id == country.id)
    if (index >= 0) {
      state.inCart.splice(index, 1)
      return { ...state, inCart: [...state.inCart] }
    }
    return state
  }

  default:
    return state
  }
}
