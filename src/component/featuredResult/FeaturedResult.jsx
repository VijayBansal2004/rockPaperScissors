import React from 'react'
import styles from "./FeaturedResult.module.css"
const FeaturedResult = ({ userGuess, compGuess }) => {

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
                <div>
                    <p>You played {userGuess}</p>
                    {
                        featuredImgs?.map((featuredImg) => (
                            userGuess === featuredImg.name && <img src={featuredImg.imgPath} alt="userGuess" />

                        ))
                    }
                    {/* <img src={ } alt="rockImg" /> */}
                </div>
                <div>
                    <p>Computer played {compGuess}</p>
                    {
                        featuredImgs?.map((featuredImg) => (
                            compGuess === featuredImg.name && <img src={featuredImg.imgPath} alt="compGuess" />

                        ))
                    }
                </div>
            </div>
            <div>
                <p>Computer wins!!</p>
            </div>
        </>
    )
}

export default FeaturedResult
