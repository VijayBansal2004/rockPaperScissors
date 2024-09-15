import React from 'react'
import styles from "./PreviousHistory.module.css"

const PreviousHistory = ({ userGuess, compGuess, win }) => {
    const history = [
        {
            userGuess,
            compGuess,
            win
        },
    ]

    return (
        <table>
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
                            <td>{row.userGuess}</td>
                            <td>{row.compGuess}</td>
                            <td>{row.win}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default PreviousHistory
