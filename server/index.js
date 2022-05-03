// server/index.js
require('dotenv').config()
const express = require('express');
const axios = require('axios');

const PORT = process.env.PORT || 3001;

const app = express();

const params = {
    access_key: process.env.API_KEY
}


//node serves the files for our react app
/*app.get("/api", (req, res) => {
    axios.get('http://api.aviationstack.com/v1/flights', {params})
  .then(response => {
    const apiResponse = response;
    res.json({ response: apiResponse });
  }).catch(error => {
    console.log(error);
  });
  });*/
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
