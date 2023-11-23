const forecast = require("./API/forecast")
const geocode = require('./API/geocode')
const country = process.argv[2]




country ?
    (geocode(country, (geocodeError, geocodeData) => {
        console.log("GeocodeError : ", geocodeError)
        console.log("GeocodeData  : ", geocodeData)


        geocodeData ?
            (forecast(geocodeData.latitude, geocodeData.longtitude, (forecastError, forecastData) => {
                console.log("ForecastError : ", forecastError)
                console.log("forecastData  : ", forecastData)
            })) :
            (console.log("Data Entered have An Error"))


    }

    )

    ) :
    console.log("Please Enter The Country Name !");
