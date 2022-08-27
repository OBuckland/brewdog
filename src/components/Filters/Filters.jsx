import React from 'react'
import styles from "./Filters.module.scss"

const Filters = (props) => {
const {updateAbvFilterOn, updateClassicFilterOn, updateAcidicFilterOn, abvFilterOn, classicFilterOn, acidicFilterOn} = props;
  // const filterItems = [
  //   // {
  //   //   id: "abv",
  //   //   label:"High ABV (>6.0%)",
  //   //   filter:abvFilterOn,
  //   //   setFilter: setAbvFilterOn
  //   // },
  //   {
  //     id: "classic",
  //     label: "Classic Range",
  //     filter:classicFilterOn,
  //     setFilter: setClassicFilterOn
  //   },
  //   {
  //     id:"acidic",
  //     label: "Acidic (ph <4)",
  //     filter:acidicFilterOn,
  //     setFilter: setAcidicFilterOn
  //   }
  // ]
 
  // const createFilters = filterItems.map((filterItem) => {
  //   return (
  //     <>
  //     {/* <div className={styles.filterItem} id={filterItem.id}>
  //       <label for={filterItem.id}>{filterItem.label}</label>
  //       <input id={filterItem.id} type="checkbox" onClick={filterItem.setFilter(!filterItem.filter)}/>
  //     </div> */}

  //     <div className={styles.filterItem}>
  //       <label for="abv">High ABV (>6.0%) </label>
  //       <input id="abv" type="checkbox" onClick={() => {setAbvFilterOn(!abvFilterOn)}}/>
  //     </div>
  //     </>
  //   )
  // })

  return (
    <>
       <div className={styles.filterItem}>
        <label for="abv"> High ABV </label>
        <input name="filters" id="abv" type="radio" onChange={() => updateAbvFilterOn(!abvFilterOn)}/>
      </div>

      <div className={styles.filterItem}>
        <label for="classic"> Classic Range </label>
        <input name="filters" id="classic" type="radio" onChange={() => updateClassicFilterOn(!classicFilterOn)}/>
      </div>

      <div className={styles.filterItem}>
        <label for="acidic"> Acidic </label>
        <input name="filters" id="acidic" type="radio" onChange={() => updateAcidicFilterOn(!acidicFilterOn)}/>
      </div>
      </>
  )

}

export default Filters