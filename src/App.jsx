import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./App.module.scss";

import {
  getBeers,
  getFilteredBeers,
  getAbvBeers,
  getClassicBeers,
  getAcidicBeers,
} from "./services/beers.service";

import Main from "./containers/Main";
import NavBar from "./containers/NavBar";

function App() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [abvFilterOn, setAbvFilterOn] = useState(false);
  const [classicFilterOn, setClassicFilterOn] = useState(false);
  const [acidicFilterOn, setAcidicFilterOn] = useState(false);

  useEffect(async () => {
    const beers = await getBeers("");
    setBeers(beers);
    console.log(beers);
  }, []);

  const updateSearchTerm = (searchTerm) => {
    setSearchTerm(searchTerm);
    const beers = getFilteredBeers(searchTerm);
    setBeers(beers);
  };

  const updateAbvFilterOn = (abvFilterOn) => {
    setAbvFilterOn(abvFilterOn);
    getAbvBeers();
    setBeers(beers);
  };

  const updateClassicFilterOn = (classicFilterOn) => {
    setClassicFilterOn(classicFilterOn);
    getClassicBeers();
    setBeers(beers);
  };

  const updateAcidicFilterOn = (acidicFilterOn) => {
    setAcidicFilterOn(acidicFilterOn);
    getAcidicBeers();
    setBeers(beers);
  };

  return (
    <>
      <main>
        <NavBar
          updateAbvFilterOn={updateAbvFilterOn}
          updateSearchTerm={updateSearchTerm}
          updateClassicFilterOn={updateClassicFilterOn}
          updateAcidicFilterOn={updateAcidicFilterOn}
          abvFilterOn={abvFilterOn}
          classicFilterOn={classicFilterOn}
          acidicFilterOn={acidicFilterOn}
        />
        <Main beers={beers} />
      </main>
    </>
  );
}

export default App;
