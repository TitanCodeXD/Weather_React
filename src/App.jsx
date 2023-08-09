import {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faCoffee, faSun } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
const [city, setCity] = useState("");
const  [weatherForecast, setWeatherForecast] = useState(null)

const handleChange = (event) => {
setCity(event.target.value);
};

const handleSearch = () => {
  fetch(`http://api.weatherapi.com/v1/current.json?key=e29a92e1e65d4405bae231117230808&q=${city}&lang=pt`
  ).then((response) => {
    if (response.status === 200) {
      return response.json()
    }
  }
  ).then((data) => {
    setWeatherForecast(data);
  });
};

  return (
    <>
      <div>


        <nav className = "navbar navbar-expanded-md navbar-dark bg-dark mb-4">
        <a className = "navbar-brand text-white ml-4" href = "#">Previsão do Tempo <FontAwesomeIcon icon={faSun} fade size = "xl" style={{color: "#fff700",}} /> </a>
        
        </nav>


        <main className = "container">
          <div className = "jumbotron">
            <h1>
              Verifique a previsão do tempo da sua cidade! 
            </h1>
            <p className = "lead">
              Digite o nome da cidade e em seguida clique em pesquisar :)
            </p>

            <div className = "row mb-4">
              <div className = "col-md-6">
                <input 
                onChange={handleChange}
                className = "form-control" 
                value = {city}>

                </input>
              </div>
            </div>

            <button onClick= {handleSearch} className = "btn btn-primary btn-lg">
              Pesquisar
            </button>


          {
            weatherForecast ? (
              <div>
              <div className = "mt-4 d-flex align-items-center">

                <div>
                  <img src = {weatherForecast.current.condition.icon}></img>
                </div>

                <div>
                  <h3>Hoje o dia está: {weatherForecast.current.condition.text}</h3>
                  <p>Temp: {weatherForecast.current.temp_c}°</p>
                </div>

                </div>
            </div>
          ): null}

          </div>

        </main>

      </div>
    </>
  )
}

export default App
