import React from 'react'
import styles from "./CardList.module.scss"
import Card from "../Card"


const CardList = (props) => {
  const {beers} = props;
  
  return (
    <>
    <div className={styles.cardContainer}>{beers.map((beer) => <Card key={beer.id} beer={beer} />)}</div>
    </>
  )
}

export default CardList;