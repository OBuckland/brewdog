import React from 'react'
import styles from './NavBar.module.scss'
import SearchBar from "../../components/SearchBar"
import Filters from "../../components/Filters"

const NavBar = (props) => {
  const {updateAbvFilterOn, updateSearchTerm,  setAbvFilterOn, abvFilterOn, setClassicFilterOn, classicFilterOn, setAcidicFilterOn, acidicFilterOn } = props;
  return (
    <div className={styles.navContainer}>
      <SearchBar updateSearchTerm={updateSearchTerm} />
      <Filters updateAbvFilterOn={updateAbvFilterOn} updateSearchTerm={updateSearchTerm} abvFilterOn={abvFilterOn} setAbvFilterOn={setAbvFilterOn} classicFilterOn={classicFilterOn} setClassicFilterOn={setClassicFilterOn} acidicFilterOn={acidicFilterOn} setAcidicFilterOn={setAcidicFilterOn}/>
    </div>
  )
}

export default NavBar