import React from 'react'
import styles from "./SearchBar.module.scss"

const SearchBar = (props) => {
  const {updateSearchTerm} = props;
  return (
    <>
      <input className={styles.searchBar} type="text" placeholder="Search..." onInput={event => updateSearchTerm(event.target.value)}/>
    </>
  )
}

export default SearchBar