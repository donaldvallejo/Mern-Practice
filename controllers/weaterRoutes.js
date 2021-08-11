const axios = require("axios");
const app = require("express")
const router = app.Router()
require("dotenv").config();

// use the following line in case we run this file alone (to find the correct .env location)
//const env = require("dotenv").config({ path: __dirname + "/../.env" });

// testing our variables
//const city = "San Francisco", country = "America";


// weather route for getting info from openweathermap.org
// use query for city and country
// e.g. /api/weather?city=some_city&country=some_country
router.get("/", (req, res) => {
    
    // Axios function to call the openweathermap api
    const weatherCall = async (city, country, res) => {
        try {
            const response = await axios({
                method: "GET",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${process.env.OpenWeatherAPPID}`,
            })
            console.log(response.data)
            res.json({data: response.data})
        }
        catch (err) {
            console.log("err on weaterRoute:",(err.response.data || err.message))
            res.status(err.response.status || 500).json({"message": err.response.data.message || err.message})
        }
    }
    
    // check for incoming request for city and country
    const {city, country} = req.query;
    if (!city || !country || city.trim()==="" || country.trim()==="") {
        return res.status(400).json({message: "city and/or country cannot be null or empty"})
    }

    weatherCall(city, country, res)
})

module.exports = router


