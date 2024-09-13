import React from 'react'
import styles from "./FeaturedResult.module.css"
const FeaturedResult = () => {
    return (
        <>
            <div className='d-flex justify-content-between'>
                <div>
                    <p>You played rock</p>
                    <img src="" alt="rockImg" />
                </div>
                <div>
                    <p>Computer played rock</p>
                    <img src="" alt="paperImg" />
                </div>
            </div>
            <div>
                <p>Computer wins!!</p>
            </div>
        </>
    )
}

export default FeaturedResult
