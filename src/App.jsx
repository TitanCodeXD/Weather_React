import {useState} from 'react';
import './App.css';

function App() {
const [city, setCity] = useState("aa");

const handleChange = (event) => {
setCity(event.target.value);
};

  return (
    <>
      <div>


        <nav className = "navbar navbar-expanded-md navbar-dark bg-dark mb-4">
        <a className = "navbar-brand text-white ml-4" href = "#">Previsão do Tempo</a>
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

            <button className = "btn btn-primary btn-lg">
              Pesquisar
            </button>

          </div>

        </main>

      </div>
    </>
  )
}

export default App
