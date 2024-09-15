import React from 'react'
import styles from "./ScoreBoard.module.css"

const ScoreBoard = ({ userWin, computerWin }) => {
    return (
        <>
            <div className={`d-flex justify-content-between mb-4 ${styles.scroreBoardContainer}`}>
                <div className="d-flex gap-1">
                    <p className={`${styles.score}`}>{userWin}</p>
                    <p className={`${styles.player}`}>You</p>
                </div>

                <div className="d-flex gap-1">
                    <p className={`${styles.player}`}>Computer</p>
                    <p className={`${styles.score}`}>{computerWin}</p>
                </div>
            </div>
        </>
    )
}

export default ScoreBoard
