import React from 'react'

const FoodInfo = props => {
    return (
        <article>
            <h2>{props.recipeInfo.name}</h2>
            <img src={props.recipeInfo.image} alt={props.recipeInfo.name}/>
            <h3>Nutritonal Facts</h3>
            {/* {Object.keys.props.recipeInfo.nutrients.map((element, i) => <p>{element}</p>)} */}
            <h3>Ingredients</h3>
            {props.recipeInfo.ingredients.map((element, i) => <p>{element}</p>)}
            <h3>Instructions</h3>
            {props.recipeInfo.instructions.map((element, i) => <p>{element}</p>)}
        </article>
    )
}

export default FoodInfo