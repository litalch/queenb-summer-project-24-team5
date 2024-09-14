import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/HomePage/HomePage';
import styles from './styles/App.module.css';
import FirstButton from "./components/common/FirstButton/FirstButton";
import FilterMenu from './components/FilterMenu/FilterMenu';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <Link to="/">
            <img src="/project-logo.png" alt="Logo" className={styles.appLogo} />
          </Link>
          <nav className={styles.appNav}>
            <Link to="/" className={styles.appLink}>Home</Link>
            <Link to="/search" className={styles.appLink}>Search</Link>
            <Link to="/upload" className={styles.appLink}>Upload</Link>
            <FirstButton className={styles.navButton}>Login/Sign Up</FirstButton>
          </nav>
        </header>
        <main className={styles.main}>
        <FilterMenu/>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <footer className={styles.footer}>
          <p>&copy; QueenB Summer Camp Project 2024</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
