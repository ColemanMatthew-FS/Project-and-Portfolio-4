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
        const baseURL = 'http://api.aviationstack.com/v1/flights',
        
        fetch(baseURL + accessToken)
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
            intro.innerHTML = 'The following airline name was obtained via an API call using aviationstack:'
            example.innerHTML = `${responseAsJson.data[0].airline.name}, ${responseAsJson.data[0].departure.airport} to ${responseAsJson.data[0].arrival.airport},
            date: ${responseAsJson.data[0].flight_date}`
            const main = document.querySelector('main')
            main.append(intro, example)
        })
        .catch(err => {
            console.log(err)
        })
    }
}