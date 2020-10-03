import React from 'react'
import { Input } from 'semantic-ui-react'

export type SearchProps = {
  query: string
  handleUpdateQuery: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}

const Search = ({ handleUpdateQuery, query }: SearchProps) => {
  return (
    <div>
      <Input
        icon="search"
        placeholder="Search for a country..."
        onChange={(event) => handleUpdateQuery(event)}
        value={query}
      />
    </div>
  )
}
export default Search
