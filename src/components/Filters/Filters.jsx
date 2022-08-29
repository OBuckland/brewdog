import React from "react";
import styles from "./Filters.module.scss";

const Filters = (props) => {
  const {
    updateAbvFilterOn,
    updateClassicFilterOn,
    updateAcidicFilterOn,
    abvFilterOn,
    classicFilterOn,
    acidicFilterOn,
  } = props;

  return (
    <>
      <div className={styles.filterItem}>
        <label for="abv"> High ABV </label>
        <input
          name="filters"
          id="abv"
          type="radio"
          onChange={() => updateAbvFilterOn(!abvFilterOn)}
        />
      </div>

      <div className={styles.filterItem}>
        <label for="classic"> Classic Range </label>
        <input
          name="filters"
          id="classic"
          type="radio"
          onChange={() => updateClassicFilterOn(!classicFilterOn)}
        />
      </div>

      <div className={styles.filterItem}>
        <label for="acidic"> Acidic </label>
        <input
          name="filters"
          id="acidic"
          type="radio"
          onChange={() => updateAcidicFilterOn(!acidicFilterOn)}
        />
      </div>
    </>
  );
};

export default Filters;
