import React from 'react'

const FoodInfo = props => {
    const nutrientInfo = (Object.entries(props.recipeInfo.nutrients))
    console.log(nutrientInfo)
    console.log(nutrientInfo[0][0])
    //The FoodInfo object maps through the objects from Details.js and populate HTML elements
    return (
        <article>
            <h2>{props.recipeInfo.name}</h2>
            <img src={props.recipeInfo.image} alt={props.recipeInfo.name}/>
            <h3>Nutritonal Facts</h3>
            {/* the Nurtients object is split into an array of its keys and values,
            which are then added to a list */}
            <ol>
                {nutrientInfo.map((element, i) => 
                    <li key={i}>
                        <p>{element[0]}:</p>
                        <p>{element[1]}</p>
                    </li>
                )}
            </ol>
            <h3>Ingredients</h3>
            <ol>
                {props.recipeInfo.ingredients.map((element, i) => <li key={i}>{element}</li>)}
            </ol>
            <h3>Instructions</h3>
            <ol>
                {props.recipeInfo.instructions.map((element, i) => <li key={i}>{element}</li>)}
            </ol>
        </article>
    )
}

export default FoodInfo