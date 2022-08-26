import React from 'react'
import styles from "./Filters.module.scss"

const Filters = () => {
  const filterItems = [
    {
      id: "abv",
      label:"High ABV (>6.0%)"
    },
    {
      id: "classic",
      label: "Classic Range"
    },
    {
      id:"acidic",
      label: "Acidic (ph <4)"
    }
  ]
 
  const createFilters = filterItems.map((filterItem) => {
    return (
      <>
      <div className={styles.filterItem}>
        <label for={filterItem.id}>{filterItem.label}</label>
        <input id={filterItem.id} type="checkbox" />
      </div>
      </>
    )
  })

  return (
    <div> 
    {createFilters}
    </ div>
  )

}

export default Filters