import React from 'react'
import styles from "./FeaturedResult.module.css"
const FeaturedResult = ({ userGuess, compGuess, win }) => {

    const featuredImgs = [
        {
            name: "Paper",
            imgPath: "../../../public/paper.png",
        },
        {
            name: "Rock",
            imgPath: "../../../public/rock.png",
        },
        {
            name: "Scissors",
            imgPath: "../../../public/scissors.png",
        },
    ]

    return (
        <>
            <div className='d-flex justify-content-between'>
                <div className={`${styles.featuredContainer}`}>
                    <p className={`${styles.players}`}>You played {userGuess}</p>
                    {
                        featuredImgs?.map((featuredImg) => (
                            userGuess === featuredImg.name && <img className={`${styles.yourGuessedImg}`} src={featuredImg.imgPath} alt="userGuess" />

                        ))
                    }
                    {/* <img src={ } alt="rockImg" /> */}
                </div>
                <div className={`${styles.featuredContainer}`}>
                    <p className={`${styles.players}`}>Computer played {compGuess}</p>
                    {
                        featuredImgs?.map((featuredImg) => (
                            compGuess === featuredImg.name && <img className={`${styles.computerGuessedImg}`} src={featuredImg.imgPath} alt="compGuess" />

                        ))
                    }
                </div>
            </div>
            <div>
                <p className={`${styles.win}`}>{win}</p>
            </div>
        </>
    )
}

export default FeaturedResult
