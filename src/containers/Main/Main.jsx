import React from 'react'
import styles from "./Main.module.scss"
import Card from '../../components/Card/Card'

import beers from '../../data/beerData'

const Main = () => {
  console.log(beers)
  return (
<>
    <section className={styles.cardContainer}>
            {beers.map((beer) => {
                return <Card beer={beer} />
            })}
         </section>
    </>
  )
}

export default Main