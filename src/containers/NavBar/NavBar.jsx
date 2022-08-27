import React from 'react'
import styles from './NavBar.module.scss'
import SearchBar from "../../components/SearchBar"
import Filters from "../../components/Filters"

const NavBar = (props) => {
  const { updateAbvFilterOn, updateSearchTerm, updateClassicFilterOn, updateAcidicFilterOn, abvFilterOn, classicFilterOn, acidicFilterOn } = props;
  const resetFilters = () => {
    window.location.reload();
  }

  return (
    <div className={styles.navContainer}>
      <SearchBar updateSearchTerm={updateSearchTerm} />
      <Filters updateAbvFilterOn={updateAbvFilterOn} updateSearchTerm={updateSearchTerm} updateClassicFilterOn={updateClassicFilterOn} updateAcidicFilterOn={updateAcidicFilterOn} abvFilterOn={abvFilterOn} classicFilterOn={classicFilterOn} acidicFilterOn={acidicFilterOn} />
      <div><button onClick={() => {resetFilters()}}>Reset</button></div>
    </div>
  )
}

export default NavBar