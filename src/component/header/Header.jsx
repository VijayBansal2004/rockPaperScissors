import React from 'react'
import styles from "./Header.module.css"
const Header = () => {
    return (
        <div className={`${styles.header} mt-5`}>
            <h1>Rock, Paper and Scissors</h1>
        </div>
    )
}

export default Header
