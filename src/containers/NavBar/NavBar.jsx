import React from 'react'
import styles from './NavBar.module.scss'
import SearchBar from "../../components/SearchBar"
import Filters from "../../components/Filters"

const NavBar = () => {
  return (
    <div className={styles.navContainer}>
      <SearchBar />
      <Filters />
    </div>
  )
}

export default NavBar