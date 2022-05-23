import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import Food from '../components/Food'


function Results() {
    let navigate = useNavigate()
    //results page receives the API response
    const location = useLocation()
    //If the user selects a recipe, a Details page is created using that recipe's data
    function loadInfo(key){
        console.log(key)
        const newRecipe = location.state.recipeData.filter(post => location.state.recipeData.indexOf(post) === key)
        console.log(newRecipe)
        navigate(`/Project-and-Portfolio-4/Details`, { state: { newRecipe }})
    }

    return (
        <section>
            <h2 style={styles.resultsHeader}>There are recipes for the following foods, obtained using the RecipesAPI by Pickle.</h2>
            <article style={styles.foodCards}>
                {/* If there's anything in the state, it's mapped into Food objects (which consist of a paragraph) */}
                {location && location.state.recipeData.map((element, i) => <Food key={i} recipeInfo={element} seeMore={() =>loadInfo(i)} />)}
            </article>
        </section>
    )
}

export default Results

const styles = {
    foodCards: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0rem 10rem 0rem 10rem',
        justifyContent: 'space-evenly',
    },
    resultsHeader: {
        padding: '1rem',
        textAlign: 'center'
    }
}