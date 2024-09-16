import React from 'react'
import styles from "./PreviousHistory.module.css"

const PreviousHistory = ({ history }) => {

    return (
        <table className={`${styles.table}`}>
            <thead>
                <tr>
                    <td>Your Choise</td>
                    <td>Computer Choise</td>
                    <td>Win</td>
                </tr>
            </thead>
            <tbody>
                {
                    history.map((row) => (
                        <tr>
                            <td className='col-4'>{row.userGuess}</td>
                            <td className='col-4'>{row.compGuess}</td>
                            <td className='col-4'>{row.win}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default PreviousHistory
