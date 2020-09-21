import React from 'react'
import {Input} from 'semantic-ui-react'
import {useDispatch,useSelector} from 'react-redux'

import { AppState} from '../../types'
import { fetchSearchedCountries } from '../../redux/actions'


const Search=() =>{
    
    const dispatch = useDispatch()
    let countries = useSelector((state: AppState) => state.countries.countries)


    return (
        <div>
            <Input icon ='search' 
                placeholder='Search for a country...'
                onChange = {(e) => dispatch(fetchSearchedCountries(e.target.value))}
             />
        </div>
    )
}

export default Search;
