import React from 'react'
import {useLocation} from 'react-router-dom'
import FoodInfo from '../components/FoodInfo'

function Details() {
    //The details page makes a FoodInfo component using the data received from the Results page
    const location = useLocation()
    const background = location.state.newRecipe[0].image

    return(
        <div style={styles.detailsContainer}>
            <div style={{overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                padding: '1rem',
                height: '20rem',
                background: `no-repeat center/100% url(${background})`,
                width: '100%'}}>
            </div>
            {/* Details about the recipe are in a foodInfo component */}
            {location && <FoodInfo key={0} recipeInfo={location.state.newRecipe[0]} />}
        </div>
    )
}

export default Details

const styles = {
    detailsContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
}