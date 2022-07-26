import './App.css'

const Mensaje = () => {
  return <h1>Hola Mundo</h1>
}

const Description = () => {
  return <p>Este es el curso de midu de react y js</p>
}

function App() {
  return (
    <div className='App'>
    <Mensaje />
    <Mensaje />
    <Description />
    </div>
  );
}

export default App;
