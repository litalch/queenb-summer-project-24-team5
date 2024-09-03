import React from 'react';
import styles from './Home.module.css';
import RandomDuck from '../../components/RandomDuck/RandomDuck';


const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.headline}>Women's Categories</h1>
      <RandomDuck />
      <h1 className={styles.headline}>Men's Categories</h1>
    </div>
  );
};

export default Home;
