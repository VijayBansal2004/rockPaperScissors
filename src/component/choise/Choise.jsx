import React from 'react'
import styles from './Choise.module.css'

const Choise = () => {
    return (
        <div>
            <h2>Rock, Paper, or Scissors?</h2>
            <div className="d-flex justify-content-around">
                <button className="btn btn-primary">Rock</button>
                <button className="btn btn-primary">Paper</button>
                <button className="btn btn-primary">Scissors</button>
            </div>
        </div>
    )
}

export default Choise
