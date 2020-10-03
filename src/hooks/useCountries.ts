import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect, useMemo } from 'react'

import { AppState, Countries, Country } from '../types'
import { fetchCountries } from '../redux/actions'

const useCountries = (query: string) => {
  const [countriesList, setCountriesList] = useState<Countries>([])
  //const [error, setError] = useState([]) // add error later
  const dispatch = useDispatch()
  const countries = useSelector((state: AppState) => state.countries.countries)
  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  useMemo(() => {
    setCountriesList(searchedCountry(countries, query))
  }, [query, countries])

  function searchedCountry(allCountries: Countries, query: string) {
    return allCountries
      ? allCountries.filter(
          (country: Country) =>
            country.name.toLowerCase().includes(query.toLowerCase()) ||
            country.region.toLowerCase().includes(query.toLowerCase()) ||
            country.nativeName.toLowerCase().includes(query.toLowerCase())
        )
      : []
  }
  console.log(countriesList)
  return [countriesList]
}

export default useCountries
