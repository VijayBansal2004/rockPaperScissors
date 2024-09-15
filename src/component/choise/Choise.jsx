import React from 'react'
import styles from './Choise.module.css'

const Choise = ({ handleUserGuess }) => {
    const buttons = ['Rock', 'Paper', 'Scissors'];
    return (
        <div className='mb-5'>
            <h2 className={`${styles.heading}`}>Rock, Paper, or Scissors?</h2>
            <div className="d-flex justify-content-around">
                {
                    buttons?.map((button) => (
                        <button key={button} className={`btn btn-primary ${styles.buttons}`} onClick={() => handleUserGuess(button)}>{button}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default Choise
