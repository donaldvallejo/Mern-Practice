const axios = require("axios");
const app = require("express")
const router = app.Router()
require("dotenv").config();

// use the following line in case we run this file alone (to find the correct .env location)
//const env = require("dotenv").config({ path: __dirname + "/../.env" });

const city = "San Francisco";
const country = "America";


router.get("/", (req, res) => {
    const weatherCall = async (city, country) => {
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
    
    weatherCall(city, country)
})

module.exports = router


