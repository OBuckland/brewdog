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

  // renders API data when page loads and prevents a loop of re-rendering
  useEffect(async () => {
    const beers = await getBeers("");
    setBeers(beers);
    console.log(beers);
  }, []);

  // functions to apply the search criteria, update the relevant state & re-render beers
  const updateSearchTerm = async (searchTerm) => {
    setSearchTerm(searchTerm);
    const beers = await getFilteredBeers(searchTerm);
    setBeers(beers);
  };

  const updateAbvFilterOn = async (abvFilterOn) => {
    setAbvFilterOn(abvFilterOn);
    const beers = await getAbvBeers();
    setBeers(beers);
  };

  const updateClassicFilterOn = async (classicFilterOn) => {
    setClassicFilterOn(classicFilterOn);
    const beers = await getClassicBeers();
    setBeers(beers);
  };

  const updateAcidicFilterOn = async (acidicFilterOn) => {
    setAcidicFilterOn(acidicFilterOn);
    const beers = await getAcidicBeers();
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
