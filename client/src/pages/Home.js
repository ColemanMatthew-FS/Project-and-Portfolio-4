import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
    const [recipe, updateRecipe] = useState(null)
    let navigate = useNavigate()

    const addItem = e => {
        e.preventDefault()
        async function fetchData(){
          const baseURL = 'https://recipesapi2.p.rapidapi.com/recipes/'
          e.target.entry.value = encodeURI(e.target.entry.value)
          const URL = baseURL + e.target.entry.value + '?maxRecipes=10'
          const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Host': 'recipesapi2.p.rapidapi.com',
              'X-RapidAPI-Key': 'bd6b878c0bmshfadcc5873b4a741p16d104jsndb1d935fefd5'
            }
          };
          //makes the api call
          const response = await fetch(URL, options)
          .catch(err => console.log(err))
          const result = await response.json()
          console.log(result.data)
          const recipeData = result.data
          console.log(recipeData)
          navigate(`./Results`, { state: { recipeData }})
        }
        fetchData()
    }
    return (
        <div className="App">
            <form id="form" onSubmit={addItem}>
                <p>Enter a food and this app will perform a search using the RecipesAPI at https://rapidapi.com/Hrishi1999/api/recipesapi2/</p>
                <label id="label" htmlFor="entry">(If you don't see anything after 5-20 seconds, please refresh the page and try typing "tomato soup"</label>
                <input type="text" id="entry" name="entry" required />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Home