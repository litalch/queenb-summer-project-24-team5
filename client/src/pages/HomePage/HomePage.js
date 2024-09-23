import React from 'react';
import styles from './Home.module.css';
import womenswear from './Womenswear.png';
import menswear from './Menswear.png';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <div className={styles.home}>
      <Link to= "/WomensCollection" className={styles.card}> 
        <img src={womenswear} alt="Womenswear" />
      </Link>
      <Link to="/MensCollection" className={styles.card}> 
        <img src={menswear} alt="Menswear" />
      </Link>
    </div>
  );
};

export default Home;
