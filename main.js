window.addEventListener('load', function(){
    console.log('Page loaded')
    //assigns the myAssignment variable to Assignment.getInstance
    //through the logic of getInstance, this is effectively the same as myAssignment = new Assignment(), PROVIDED it has not already been instantiated
    //See line 36 for a map of the basic code flow
    let myAssignment = Assignment.getInstance()
})

class Assignment
{
    constructor()
    {
        //Instantiates the controller
        let controller = new Main()
    }

    //this ensures that the assignment is a singleton
    static getInstance()
    {
        //if no instance exists, a new one is created and returns
        if(!Assignment._instance)
        {
            Assignment._instance = new Assignment()
            return Assignment._instance
        }
        //if an instance does exist, it throws this error
        else
        {
            throw 'An instance of this singleton already exists!'
        }
    }
}

class Main
{
    constructor(){
        console.log("Page started")
        this.loadPage()
    }
    loadPage(e){
        const form = document.getElementById('form')
        form.addEventListener('submit', this.submitTown)
    }
    submitTown(e){
        e.preventDefault()
        const input = document.getElementById('entry')
        const label = document.getElementById('label')
        if(input.value == null){
            label.innerText = "Please enter a valid food"
        }
        else{
            const baseURL = 'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query='
            const URL = baseURL + input.value
            console.log(input.value)
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com',
		            'X-RapidAPI-Key': 'bd6b878c0bmshfadcc5873b4a741p16d104jsndb1d935fefd5'
                }
            };
            fetch(URL, options)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response
            })
            .then(responseAsJson => {
                console.log("loadPage")
                console.log(responseAsJson)
                let intro = document.createElement('p')
                if(responseAsJson.length == 0){
                    intro.innerHTML ='Please enter a valid food'
                }
                else{
                    intro.innerHTML = 'The meal you entered consists of the following items, obtained using the Nutrition API by API-Ninjas:'
                    const main = document.querySelector('main')
                    main.append(intro)
                    for(let i=0; i<responseAsJson.length; i++){
                        let example = document.createElement('p')
                        example.innerHTML = `Item: ${responseAsJson[i].name}`
                        let example2 = document.createElement('p')
                        example2.innerHTML = `Calories: ${responseAsJson[i].calories}`
                        main.append(example, example2)
                    }
                }
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
}