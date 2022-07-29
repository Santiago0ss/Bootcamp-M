import ReactDOM from 'react-dom';
import { useState } from 'react';
import './index.css';

const App = () => {
    // const [left, setLeft] = useState(0);
    // const [right, setRight] = useState(0);

    const [counters, setCounters] = useState({
        left: 0,
        right: 0,
        mensaje: 'Mensaje del estado'
    });

    const [clicks, setClicks] = useState([]);

    const handleClickLeft = () => {
        const newCountersState = {
            ...counters,
            left: counters.left + 1
        };

        setCounters(newCountersState);
        setClicks((prevClicks) => [...prevClicks, "L"]);
    };

    const handleClickRight = () => {
        setCounters({
            ...counters,
            right: counters.right + 1
        });
        setClicks((prevClicks) => [...prevClicks, "R"]);
    };

    return (
        <div>
            {counters.left}
            <button onClick={handleClickLeft}>Left</button>
            <button onClick={handleClickRight}>Right</button>
            {counters.right}
            <p>Clicks totales: {clicks.length}</p>
            <p>{counters.mensaje}</p>
        </div>
    );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);