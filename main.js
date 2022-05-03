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
        if(input.value == null || input.value.length > 4 || input.value.length < 4){
            label.innerText = "Please enter a 4 digit flight number. Try '8022' for starters"
            
        }
        else{
            const baseURL = 'http://api.aviationstack.com/v1/flights',
            accessToken = '?access_key=4590f2a6194dc0e12212323b819f51d0'
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
                responseAsJson.data.forEach((element) => {
                    if(element.flight.number == input.value){
                        example.innerHTML = `${element.airline.name}, ${element.departure.airport}
                        to ${element.arrival.airport}, date: ${element.flight_date}`
                    }
                })
                const main = document.querySelector('main')
                main.append(intro, example)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
}