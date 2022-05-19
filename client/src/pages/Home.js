import React from 'react'
import {useNavigate} from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import Background from '../images/header.jpg'

function Home() {
    let navigate = useNavigate()

    const addItem = e => {
        e.preventDefault()
        async function fetchData(){
          const baseURL = 'https://recipesapi2.p.rapidapi.com/recipes/'
          const entry = encodeURI(e.target.entry.value)
          const URL = baseURL + entry + '?maxRecipes=10'
          const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Host': 'recipesapi2.p.rapidapi.com',
              'X-RapidAPI-Key': 'bd6b878c0bmshfadcc5873b4a741p16d104jsndb1d935fefd5'
            }
          }
          console.log(URL)
          //makes the api call
          const response = await fetch(URL, options)
          .catch(err => console.log(err))
          const result = await response.json()
          console.log(result.data)
          if (result.data.length > 0){
            const recipeData = result.data
            console.log(recipeData)
            //sends the response to the Results page
            navigate(`./Results`, { state: { recipeData }})
          }
          else {
            let label = document.getElementById("label")
            label.innerText = "No results! Try a different food, or wait a little while and try again"
          }
        }
        fetchData()
    }
    return (
        <div className="App" style={styles.home}>
          <p style={styles.intro}>Enter a food and this app will perform a search using the RecipesAPI at https://rapidapi.com/Hrishi1999/api/recipesapi2/</p>
            <form id="form" onSubmit={addItem} style={styles.form}>
              <label id="label" htmlFor="entry">Enter a meal here</label>
              <div style={styles.textField}>
                <input type="text" id="entry" name="entry" placeholder="Search" required style={styles.inputWithIcon}/>
                <button type="submit" style={styles.inputIcon}><FaSearch/></button>
              </div>
            </form>
        </div>
    )
}

export default Home

const styles = {
  home: {
    height: '20rem',
    background: `no-repeat center/100% url(${Background})`,
    width: '100%'
  },
  intro: {
    fontSize: '2rem',
    color: '#fff',
    textShadow: '1px 1px 0px black',
    margin: '2rem',
    textAlign: 'center'
  },
  form: {
    color: '#fff',
    fontSize: '1rem',
    textShadow: '1px 1px 0px black',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  textField: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    fontWeight: 'bold',
    margin: '1rem'
  },
  inputWithIcon: {
    background: '#fff',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1rem',
    borderRadius: '10px 0px 0px 10px',
    borderWidth: '1px',
    width: '30%',
    fontFamily: 'Interstate',
  },
  inputIcon: {
    background: '#E6E6E6',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1rem',
    borderWidth: '1px',
    borderRadius: '0px 10px 10px 0px',
  },
}