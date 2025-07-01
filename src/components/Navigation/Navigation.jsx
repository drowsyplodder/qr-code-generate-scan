import React from 'react'
import { Link } from "react-router-dom";
import styles from './Navigation.module.css'


const Navigation = () => {
  return (
    <nav className = {styles.container}>
        <Link to="/generate">Сгенерировать QR</Link>
        <Link to="/scan">Сканировать QR</Link>
        <Link to="/scan_history">История сканирования</Link>
        <Link to="/generate_history">История генерирования</Link>
    </nav>
  )
}

export default Navigation
