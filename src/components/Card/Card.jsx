import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  const { image_url, name, tagline, abv } = props.beer;
  return (
    <>
      <div className={styles.card}>
        <img className={styles.image} src={image_url} alt={name} />
        <h4 className={styles.title}>{name}</h4>
        <p>{abv} ABV</p>
        <p>"{tagline}"</p>
      </div>
    </>
  );
};

export default Card;
