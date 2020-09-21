import { useDispatch, useSelector} from 'react-redux'
import {useState, useEffect} from 'react'

import { AppState, Countries } from '../types'
import {  fetchCountries } from '../redux/actions'


 const useCountries = (query:string) :[any] => {
    const [data, setData] = useState<any>([]);
    const [countriesList, setCountriesList] = useState<Countries>([]);
    const [error, setError] = useState([])
    const countries = useSelector((state: AppState) => state.countries.countries)
    const dispatch = useDispatch()
    useEffect(() => {dispatch(fetchCountries())}, [dispatch])

useEffect(() => {searchedCountry()}, [query])

    function searchedCountry () {  
        if(query)
        {
            const search = countries!.filter((country) =>
            country.name.toLowerCase().includes(query.toLowerCase()))
            setData(search)

        }
    }
   
    return [data]

}

export default useCountries