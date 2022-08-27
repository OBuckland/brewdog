import React, { useEffect } from 'react';
import {useState} from "react"
import styles from './App.module.scss';

import Main from "./containers/Main";
import NavBar from './containers/NavBar';
import getBeers from "./services/beers.service"

function App() {
const API_URL = "https://api.punkapi.com/v2/beers"
const [beers, setBeers] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [abvFilterOn, setAbvFilterOn] = useState(false)
const [classicFilterOn, setClassicFilterOn] = useState (false)
const [acidicFilterOn, setAcidicFilterOn] = useState (false)

const getBeers = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setBeers(jsonResponse)
      });
  };

  useEffect(() => {
    getBeers("");
  }, [])

  // const getBeers = (searchTerm = searchTerm, abvFilterOn = abvFilterOn, classicFilterOn = classicFilterOn, acidicFilterOn = acidicFilterOn) => {
  //   fetch(API_URL)
  //     .then((response) => response.json())
  //     .then((jsonResponse) => {
  //       const searchedBeers = jsonResponse.filter((beer) => {
  //         return beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  //       })

  //       const filteredBeers = jsonResponse.filter((beer) => {
  //         let returnBeer = true;

  //         if (abvFilterOn && beer.abv <=6) returnBeer = false;
  //         if (acidicFilterOn && beer.ph >=4) returnBeer = false;
  //         if (searchTerm && !beer.name.toLowerCase().includes(searchTerm.toLowerCase())) returnBeer = false;
          
  //         return returnBeer
  //       })
  //       setBeers(filteredBeers)
  //     });
  // };

  // useEffect(() => {
  //   getBeers("", false, false, false);
  // }, [])

  const updateSearchTerm = (searchTerm = searchTerm, abvFilterOn = abvFilterOn, classicFilterOn = classicFilterOn, acidicFilterOn = acidicFilterOn)  => {
    setSearchTerm(searchTerm);
    setAbvFilterOn(abvFilterOn);
    setClassicFilterOn(classicFilterOn);
    setAcidicFilterOn(acidicFilterOn);
    getBeers(searchTerm)
  };

  const updateAbvFilterOn = (abvFilterOn) => {
    setAbvFilterOn(abvFilterOn);
    getBeers(abvFilterOn = abvFilterOn);
  }



  return (
<>
<main>
  <NavBar updateAbvFilterOn={updateAbvFilterOn} updateSearchTerm={updateSearchTerm} abvFilterOn={abvFilterOn} setAbvFilterOn={setAbvFilterOn} classicFilterOn={classicFilterOn} setClassicFilterOn={setClassicFilterOn} acidicFilterOn={acidicFilterOn} setAcidicFilterOn={setAcidicFilterOn} />
  <Main beers={beers} />
</main>
</>
  );
}

export default App;
