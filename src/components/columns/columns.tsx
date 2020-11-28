import React from 'react'

export const columns = [
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'Flag',
    cell: (row: any) => (
      <div>
        <img width="40px" height="40px" src={`${row.flag}`} alt="Flag" />
      </div>
    ),
  },
  //better ways to display this (<0) && condition
  {
    name: 'Language',
    cell: (row: any) => (
      <div>
        <li>{row.languages[0] ? row.languages[0].name : row.languages[1]}</li>
        <li>{row.languages[1] ? row.languages[1].name : row.languages[2]}</li>
        <li>{row.languages[2] ? row.languages[2].name : row.languages[3]}</li>
      </div>
    ),
  },
  {
    name: 'Region',
    selector: 'region',
    sortable: true,
  },
  {
    name: 'Population',
    selector: 'population',
    sortable: true,
  },
]
