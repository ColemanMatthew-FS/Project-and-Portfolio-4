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
        form.addEventListener('submit', this.submitAirline)
    }
    submitAirline(e){
        e.preventDefault()
        const input = document.getElementById('airline')
        const label = document.getElementById('label')
        console.log(input.value)
        if(input.value == null){
            label.innerText = "Please enter an airline name"
            
        }
        else{
            const baseURL = 'https://aviation-reference-data.p.rapidapi.com/airline/search?name='
            const inputName = input.value
            const URL = baseURL + inputName
            console.log(URL)
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Host': 'aviation-reference-data.p.rapidapi.com',
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
                let example = document.createElement('p')
                if(responseAsJson.length == 0){
                    intro.innerHTML ='Please enter a valid airline name'
                }
                else{
                    intro.innerHTML = 'The following airline info was obtained via an API call using Aviation Reference Data:'
                    example.innerHTML = `Call sign: ${responseAsJson[0].callSign}, Name: ${responseAsJson[0].name}`
                }
                const main = document.querySelector('main')
                main.append(intro, example)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
}