import React, { useState, useContext, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'
import { Icon, Button } from 'semantic-ui-react'

import { columns } from '../columns/columns'
import { AppState } from '../../types'
import { addCountry } from '../../redux/actions'
import Header from '../header'
import { ThemeContext } from '../../context'
import useCountries from '../../hooks/useCountries'

export default function Home() {
  const { theme } = useContext(ThemeContext)
  const [query, setQuery] = useState<string>('')
  const dispatch = useDispatch()

  const countries = useSelector((state: AppState) => state.countries.countries)
  const countriesInCart = useSelector(
    (state: AppState) => state.countries.inCart
  )
  const [countriesList] = useCountries(query)
  const handleUpdateQuery = useCallback((event) => {
    setQuery(event.target.value)
  }, [])

  const tableHeader = [
    ...columns,
    {
      name: 'Buy',
      cell: (row: any) => (
        <div>
          <Button
            disabled={
              countriesInCart.find((p) => p.id === row.id) ? true : false
            }
            onClick={() => dispatch(addCountry(countries[row.id]))}
            style={{ background: theme.button, color: theme.text }}
          >
            Buy
          </Button>
          <Link to={`/country/${row.id}`}>
            <Icon name="eye" size="large" />
          </Link>
        </div>
      ),
    },
  ] // adding this cos can't have hooks in non react fc

  return (
    <>
      <Header handleUpdateQuery={handleUpdateQuery} query={query} />

      {
        <DataTable
          title="List of Countries"
          columns={tableHeader}
          data={countriesList}
          striped={true}
          noDataComponent={<h2>LOADING.../No Data</h2>}
          pagination={true}
        />
      }
    </>
  )
}
