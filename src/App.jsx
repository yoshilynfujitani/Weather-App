import { useState } from 'react'
import Search from './components/search/Search'
import Current from './components/current/Current'
import { WEATHER_API_URL, WEATHER_API_KEY } from './api'


function App() {
  const [currentweather, setCurrentWeather] = useState(null);
  const [forecast, setforecast] = useState(null);


  const handleOnSearchChange = (searchData) =>{
    const[lat,lon] = searchData.value.split(" ");

    const currentweatherfetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastweatherfetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}units=metric`);

    Promise.all([currentweatherfetch, forecastweatherfetch])
    .then(async(response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();
      setCurrentWeather({city: searchData.label , ...weatherResponse});
      setforecast({city: searchData.label, ...forecastResponse});
    })
    .catch((err) => console.log(err))
  }

  console.log(forecast)
  console.log(currentweather)

  return (
    <>
      <div className="container">
          <Search onSearchChange={handleOnSearchChange}/>
          {currentweather && <Current data={currentweather}/>}

      </div>        
    </>
  )
}

export default App
