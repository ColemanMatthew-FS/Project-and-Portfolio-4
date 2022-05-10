import React from 'react'
import {useLocation} from 'react-router-dom'
import Food from '../components/Food'

function Results() {
    const location = useLocation()
    console.log(location.data)
    return (
        <div>
            <p>There are recipes for the following foods, obtained using the RecipesAPI by Pickle. For the sake of simplicity, the recipes themselves are not listed here, but the full response is printed to the console.</p>
            {/* If there's anything in the state, it's mapped into Food objects (which consist of a paragraph) */}
            {/* {recipe && recipe[0].data.map((element, i) => <Food key={i} recipeInfo={element} />)} */}
        </div>
    )
}

export default Results