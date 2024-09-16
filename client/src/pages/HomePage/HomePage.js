import React from 'react';
import styles from './Home.module.css';
import womenswear from './Womenswear.png';
import menswear from './Menswear.png';


const Home = () => {
  return (
    <div className={styles.home}>
      <img src={womenswear} alt="Womenswear" />
      <img src={menswear} alt="Menswear" />
    </div>
  );
};

export default Home;
