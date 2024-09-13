import React from 'react'
import styles from "./ScoreBoard.module.css"

const ScoreBoard = () => {
    return (
        <>
            <div className={`d-flex justify-content-between ${styles.scroreBoardContainer}`}>
                <div className="d-flex gap-1">
                    <p className={`${styles.score}`}>3</p>
                    <p>You</p>
                </div>

                <div className="d-flex gap-1">
                    <p>Computer</p>
                    <p className={`${styles.score}`}>7</p>
                </div>
            </div>
        </>
    )
}

export default ScoreBoard
