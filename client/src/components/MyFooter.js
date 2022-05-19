import React from 'react'

const MyFooter = () => {
    return (
        <footer style={styles.footer}>
            <p>©Matthew Coleman 2022</p>
            <p>This app is powered by the RecipeAPI made by Hrishi Patel and hosted on rapidapi.com</p>
        </footer>
    )
}

export default MyFooter

const styles = {
    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '0% 10% 0% 10%',
    },
}