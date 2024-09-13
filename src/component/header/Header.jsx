import React from 'react'
import styles from "./Header.module.css"
const Header = () => {
    return (
        <div className={`${styles.header}`}>
            <h2>Rock, Paper and Scissors</h2>
            <p>First to 15 is the Winner</p>
        </div>
    )
}

export default Header
