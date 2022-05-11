import React from 'react'
import {useLocation} from 'react-router-dom'
import FoodInfo from '../components/FoodInfo'

function Details() {
    //The details page makes a FoodInfo component using the data received from the Results page
    const location = useLocation()
    console.log(location.state)
    console.log(location.state.nutrients)

    return(
        <div>
            {location && <FoodInfo key={0} recipeInfo={location.state.newRecipe[0]} />}
        </div>
    )
}

export default Details