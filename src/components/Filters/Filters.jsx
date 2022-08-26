import React from 'react'
import styles from "./Filters.module.scss"

const Filters = (props) => {
const { setAbvFilterOn, abvFilterOn, setClassicFilterOn, classicFilterOn, setAcidicFilterOn, acidicFilterOn } = props;
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
        <label for="abv"> High ABV (>6.0%) </label>
        <input id="abv" type="checkbox" onChange={() => setAbvFilterOn(!abvFilterOn)}/>
      </div>

      <div className={styles.filterItem}>
        <label for="classic"> Classic Range </label>
        <input id="classic" type="checkbox" onChange={() => setClassicFilterOn(!classicFilterOn)}/>
      </div>

      <div className={styles.filterItem}>
        <label for="acidic"> Acidic (pH below 4%) </label>
        <input id="acidic" type="checkbox" onChange={() => setAcidicFilterOn(!acidicFilterOn)}/>
      </div>
      </>
  )

}

export default Filters