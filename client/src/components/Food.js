import React from 'react'

const Food = props => {
    return (
        <article style={styles.foodContainer} onClick={props.seeMore}>
            {/* Takes the image from the API results */}
            <div style={styles.imageContainer}>
                <img src={props.recipeInfo.image} alt={props.recipeInfo.name} />
            </div>
            <section style={styles.infoSection}>
                {/* Takes the recipe name, protein, calories, time, and servings from the API */}
                <h2 style={styles.infoHeader}>{props.recipeInfo.name}</h2>
                <div>
                    <ul style={styles.infoBox}>
                        <li style={styles.listItem}>
                            <p>Protein: {props.recipeInfo.nutrients.protein}</p>
                        </li>
                        <li style={styles.listItem}>
                            <p>Calories: {props.recipeInfo.nutrients["calories from fat"]}</p>
                        </li>
                        <li style={styles.listItem}>
                            <p>Time: {props.recipeInfo.time.total}</p>
                        </li>
                        <li style={styles.listItem}>
                            <p>Serves {props.recipeInfo.servings}</p>
                        </li>
                    </ul>
                </div>
            </section>
        </article>
    )
}

export default Food

const styles = {
    imageContainer: {
        width: '200px',
        height: '200px',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '20px 0px 0px 20px',
    },
    foodContainer: {
        display: 'flex',
        margin: '1rem',
        flexBasis: '700px',
        fontSize: '1rem',
        cursor: 'pointer',
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)',
        borderRadius: '20px',
    },
    infoSection: {
        margin: '0rem 0rem 0rem 1rem'
    },
    infoBox: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    listItem: {
        flex: '150px'
    },
    infoHeader: {
        color: '#707070'
    }
}