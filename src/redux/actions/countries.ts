import { Dispatch } from 'redux'

import {
    FETCH_COUNTRIES,
    Countries,
    Country,
    ADD_COUNTRY,
    CountryActions,
    REMOVE_COUNTRY,
    SEARCH_COUNTRY
    
} from '../../types'

const endpoint = "https://restcountries.eu/rest/v2"

export function setCountries (countries: Countries) : CountryActions{
    return {
        type: FETCH_COUNTRIES,
        payload:{
            countries:countries.map((country, id) =>{
                return {'id':id, ...country}
            }) // providing id for countries
        }
    }
}

export function addCountry(country:Country):CountryActions {
    return{
        type:ADD_COUNTRY,
        payload:{
            country,
        },
    }
}

export function removeCountry(country:Country): CountryActions{
    return {
        type:REMOVE_COUNTRY,
        payload: {
            country,
        }
    }
}

export function searchedCountries(countries: Countries): CountryActions{
    return {
        type:SEARCH_COUNTRY,
        payload: {
            countries,
        }
    }
}

  // Async action processed by redux-thunk middleware
export  function fetchCountries () {
    return (dispatch: Dispatch) => {
        return fetch(`${endpoint}/all`)
        .then(resp => resp.json())
        .then(countries => {
          dispatch(setCountries(countries))
        })
    }
  }

  //remiove this 
  export  function  fetchSearchedCountries (query:string){
    if(query) {
        return (dispatch: Dispatch) => {
            return fetch(`${endpoint}/name/${query}`)
            .then(resp => resp.json())
            .then(countries => {
                if(countries)
                dispatch(searchedCountries(countries))
            })
        }
    }
  }

  