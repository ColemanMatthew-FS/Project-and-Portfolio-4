import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import Food from '../components/Food'


function Results() {
    let navigate = useNavigate()
    //results page receives the API response
    const location = useLocation()
    console.log(location.state)
    //If the user selects a recipe, a Details page is created using that recipe's data
    function loadInfo(key){
        console.log(key)
        const newRecipe = location.state.recipeData.filter(post => location.state.recipeData.indexOf(post) === key)
        console.log(newRecipe)
        navigate(`../Details`, { state: { newRecipe }})
    }

    return (
        <div>
            <p>There are recipes for the following foods, obtained using the RecipesAPI by Pickle. For the sake of simplicity, the recipes themselves are not listed here, but the full response is printed to the console.</p>
            {/* If there's anything in the state, it's mapped into Food objects (which consist of a paragraph) */}
            {location && location.state.recipeData.map((element, i) => <Food key={i} recipeInfo={element} seeMore={() =>loadInfo(i)} />)}
        </div>
    )
}

export default Results