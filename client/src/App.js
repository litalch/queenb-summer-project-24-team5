import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/HomePage/HomePage';
import styles from './styles/App.module.css';
import FirstButton from "./components/common/FirstButton/FirstButton";
import Login from './pages/LoginPage/LoginPage';
import Signup from './pages/SignupPage/SignupPage';
import {useLogout} from './hooks/useLogout'

function App() {
// I think we need a Navbar component instead of the messy thing below 
  const {Logout} = useLogout()
  const handleClick = () => {
    Logout()
  }

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
            <Link to="/login" className={styles.appLink}>Login</Link>
            <Link to="/signup" className={styles.appLink}>Signup</Link>

            <FirstButton className={styles.navButton}>Login/Sign Up</FirstButton>
          <div>
            <button onClick={handleClick}>Log out</button>
          </div>
          </nav>
        </header>
        <main className={styles.main}>
          <Routes>
            <Route 
            path="/" element={<Home />} 
            />
            <Route
            path="/login"
            element={<Login />}
            />
            <Route
            path="/signup"
            element={<Signup />}
            />
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
