// import ReactDOM from 'react-dom';
// import { useState } from 'react';

// const rootElement = document.getElementById("root");

// const Counter = ( {number} ) => {
//   return <h1>{number}</h1>
// }

// const App = (props) => {
//   const [contadorValue, updateContador] = useState(0);
//   const handleClick = () => {
//     updateContador(prevContador => prevContador + 1)
//   }
//   const createDecrecion = () => {
//     updateContador(prevContador => prevContador - 1)
//   }

//   const handleClickReset = () => {
//     updateContador(0)
//   }
//   const isEven = contadorValue % 2 === 0;
//   const mensajePar = isEven ? "Es par" : "Es impar";

//   return <div>
//     <p>El contador es:</p>
//     <Counter number={contadorValue} />
//     <p>{mensajePar}</p>
//     <button onClick={handleClick}>
//       Incrementar
//       </button>
//     <button onClick={createDecrecion}>
//       Decrementar
//     </button>
//     <button onClick={handleClickReset}>
//       Reset
//     </button>
//   </div>
// }

// ReactDOM.render(<App />, rootElement);

