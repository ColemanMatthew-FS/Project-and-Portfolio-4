import logo from './logo.svg';
import './App.css';
import Food from './components/Food'
import React, {useEffect, useState} from 'react'

function App() {
  const [recipe, updateRecipe] = useState(null)
  
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
      //maps the result into a recipeData object
      const recipeData = result.data.map( recipeData =>({
        //the name key is paired with the name data from the API
        name: `${recipeData.name}`
      }))
      //our state is updated
      updateRecipe([{
        data: recipeData
      }])
      recipe && console.log(recipe[0].data)
    }
    fetchData()
  }
  return (
    <div className="App">
      <form id="form" onSubmit={addItem}>
          <p>Enter a food and this app will perform a search using the RecipesAPI at https://rapidapi.com/Hrishi1999/api/recipesapi2/</p>
          <label id="label" htmlFor="entry">(If you don't see anything after 5-20 seconds, please refresh the page and try typing "tomato soup"</label>
          <input type="text" id="entry" name="entry" required/>
          <button type="submit">Search</button>
          <p>There are recipes for the following foods, obtained using the RecipesAPI by Pickle. For the sake of simplicity, the recipes themselves are not listed here, but the full response is printed to the console.</p>
          {/* If there's anything in the state, it's mapped into Food objects (which consist of a paragraph) */}
          {recipe && recipe[0].data.map((element, i) => <Food key={i} recipeInfo={element}/>)/*<Food recipeInfo={recipe[0].data[0]}/>*/}
      </form>
    </div>
  );
}

export default App;
