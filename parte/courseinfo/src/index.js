import ReactDOM from 'react-dom';
import { useState } from 'react';

const rootElement = document.getElementById("root");

const App = (props) => {
  const [contadorValue, updateContador] = useState(0);
  // const contador = useState(0)
  // const contadorValue = contador[0]
  // const updateContador = contador[1]
  const handleClick = () => {
    updateContador(prevContador => prevContador + 1)
  }
  const createDecrecion = () => {
    updateContador(prevContador => prevContador - 1)
  }

  const handleClickReset = () => {
    updateContador(0)
  }
  const isEven = contadorValue % 2 === 0;
  const mensajePar = isEven ? "Es par" : "Es impar";

  return <div>
    <p>El contador es:</p>
    <h1>{contadorValue}</h1>
    <p>{mensajePar}</p>
    <button onClick={handleClick}>
      Incrementar
      </button>
    <button onClick={createDecrecion}>
      Decrementar
    </button>
    <button onClick={handleClickReset}>
      Reset
    </button>
  </div>
}

ReactDOM.render(<App />, rootElement);

