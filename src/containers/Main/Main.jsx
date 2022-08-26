import React from 'react'
import styles from "./Main.module.scss"
import CardList from '../../components/CardList/CardList'

const Main = (props) => {
  const {beers} = props;

  return (
          <CardList beers={beers} />
  )
}

export default Main