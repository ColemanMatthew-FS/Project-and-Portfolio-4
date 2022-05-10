import React from 'react'

const Food = props => {
    return (
        <article>
            <p>{props.recipeInfo.name}</p>
            <button onClick={props.seeMore}>View Recipe</button>
        </article>
    )
}

export default Food