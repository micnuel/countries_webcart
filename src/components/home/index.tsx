import React, {useEffect, useContext} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DataTable from "react-data-table-component";
import {Link}  from 'react-router-dom'
import {Icon, Button} from 'semantic-ui-react'

import {columns} from '../columns/columns'
import { AppState} from '../../types'
import {  fetchCountries, addCountry } from '../../redux/actions'
import Header from '../header';
import {ThemeContext} from '../../context'
    
export default function Home() {

const {theme} =useContext(ThemeContext)
/* const [ handleSearch] = useCountries(query)
 */    const dispatch = useDispatch()
    useEffect(() => {dispatch(fetchCountries())}, [dispatch])
    const countries = useSelector((state: AppState) => state.countries.countries)
    const countriesInCart = useSelector((state: AppState) => state.countries.inCart)
    
    const tableHeader = [...columns, 
        {
            name: "Buy",
            cell: (row:any) => <div> 
                <Button
                    disabled={
                        countriesInCart.find((p) => p.id === row.id)
                          ? true
                          : false
                    }
                    onClick = {() =>dispatch(addCountry(countries[row.id]))}
                    style={{background:theme.button, color:theme.text}}
                    >Buy
                </Button>
                <Link to ={`/country/${row.id}`}><Icon name='eye' size='large' /></Link>
            </div>,
        }] // adding this cos can't have hooks in non react fc


    return (
        <>
            <Header/>

            {
                <DataTable
                title="List of Countries"
                columns={tableHeader}
                data={countries}
                striped ={true}
                noDataComponent= {<h2>LOADING...</h2>}
                pagination={true}
                />
            }
        </>
    )
}

