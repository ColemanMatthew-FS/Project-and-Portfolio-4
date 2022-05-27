import React from 'react'

const FoodInfo = props => {
    const nutrientInfo = (Object.entries(props.recipeInfo.nutrients))
    console.log(nutrientInfo)
    if (nutrientInfo.length > 0){
        console.log(nutrientInfo[0][0])
    }
    //The FoodInfo object maps through the objects from Details.js and populate HTML elements
    return (
        <article style={styles.foodInfoContainer}>
            <h2>{props.recipeInfo.name}</h2>
            <p style={styles.time}>{props.recipeInfo.time.total}</p>
            <div style={styles.backgroundDiv}>
                <article style={styles.infoArticle}>
                    {/* This column contains the ingredients */}
                    <section style={styles.infoSection}>
                        <h3>Ingredients</h3>
                        <ol style={styles.list}>
                            {props.recipeInfo.ingredients.map((element, i) => <li key={i}>{element}</li>)}
                        </ol>
                    </section>
                    {/* This column contains the instructions */}
                    <section style={styles.infoSection}>
                        <h3>Instructions</h3>
                        <ol style={styles.list}>
                            {props.recipeInfo.instructions.map((element, i) => <li key={i}>{element}</li>)}
                        </ol>
                    </section>
                    {/* This column contains nutritional facts */}
                    <section style={styles.infoSection}>
                        <h3>Nutritonal Facts</h3>
                        {/* the Nurtients object is split into an array of its keys and values,
                        which are then added to a list */}
                        <ol style={styles.nutritionList}>
                            {nutrientInfo && nutrientInfo.map((element, i) => 
                                <li key={i} style={styles.nutritionListItem}>
                                    <p>{element[0]}:</p>
                                    <p>{element[1]}</p>
                                </li>
                            )}
                        </ol>
                    </section>
                </article>
            </div>
        </article>
    )
}

export default FoodInfo

const styles = {
    foodInfoContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    infoArticle: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: '0rem 5rem 0rem 5rem',
        width: '100%'
    },
    infoSection: {
        width: '30%',
        flexBasis: '300px',
        marginRight: '5rem'
    },
    list: {
        padding: '0rem 0rem 0rem 1rem',
    },
    nutritionList: {
        padding: '0rem 0rem 0rem 1rem',
        display: 'flex',
        flexWrap: 'wrap'
    },
    nutritionListItem: {
        flexBasis: '100px',
        margin: '0rem 1.5rem 0rem 0rem'
    },
    backgroundDiv: {
        width: '100%',
        background: '#E6E6E6'
    },
    time: {
        fontWeight: 'bold'
    }
}