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

  const getFilteredBeers = (searchTerm) => {
    fetch(API_URL)
    .then((response) => response.json())
    .then((jsonResponse) => {
      const searchedBeers = jsonResponse.filter((beer) => beer.name.toLowerCase().includes(searchTerm.toLowerCase()))
      setBeers(searchedBeers)
    });
};

  const updateSearchTerm = (searchTerm)  => {
    setSearchTerm(searchTerm);
    getFilteredBeers(searchTerm)
  };
  
  const getAbvBeers = () => {
    fetch(`${API_URL}/?abv_gt=6`)
    .then((response) => response.json())
    .then((jsonResponse) => {
      setBeers(jsonResponse)
    })
  }

  const updateAbvFilterOn = (abvFilterOn) => {
    setAbvFilterOn(abvFilterOn);
    getAbvBeers()
  }

  const getClassicBeers = () => {
    fetch(`${API_URL}/?brewed_before=012010`)
    .then((response) => response.json())
    .then((jsonResponse) => {
      setBeers(jsonResponse)
    })
  }

  const updateClassicFilterOn = (classicFilterOn) => {
    setClassicFilterOn(classicFilterOn)
    getClassicBeers()
  }

  const getAcidicBeers = () => {
    fetch(API_URL)
    .then((response) => response.json())
    .then((jsonResponse) => {
      const acidicBeers = jsonResponse.filter((beer) => beer.ph <4)
      setBeers(acidicBeers)
    });
  }

  const updateAcidicFilterOn = (acidicFilterOn) => {
    setAcidicFilterOn(acidicFilterOn)
    getAcidicBeers()
  }


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

  // const updateSearchTerm = (searchTerm = searchTerm, abvFilterOn = abvFilterOn, classicFilterOn = classicFilterOn, acidicFilterOn = acidicFilterOn)  => {
  //   setSearchTerm(searchTerm);
  //   setAbvFilterOn(abvFilterOn);
  //   setClassicFilterOn(classicFilterOn);
  //   setAcidicFilterOn(acidicFilterOn);
  //   getBeers(searchTerm)
  // };





  return (
<>
<main>
  <NavBar updateAbvFilterOn={updateAbvFilterOn} updateSearchTerm={updateSearchTerm} updateClassicFilterOn={updateClassicFilterOn} updateAcidicFilterOn={updateAcidicFilterOn} abvFilterOn={abvFilterOn} classicFilterOn={classicFilterOn} acidicFilterOn={acidicFilterOn} />
  <Main beers={beers} />
</main>
</>
  );

  }

export default App;
