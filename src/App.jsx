import React from 'react';
import styles from './App.module.scss';

import Main from "./containers/Main";
import NavBar from './containers/NavBar';

function App() {
  return (
<>
<main>
  <NavBar />
  <Main />
</main>
</>
  );
}

export default App;
