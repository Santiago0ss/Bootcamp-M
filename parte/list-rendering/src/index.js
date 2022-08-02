import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const notes = [
  {
    id: 16,
    content: 'HTML is easy',
    date: '2022-08-01T16:01:0392',
    important: true
  },
  {
    id: 27,
    content: 'Browser can execute only JavaScript',
    date: '2022-08-01T16:01:0392',
    important: false
  },
  {
    id: 34,
    content: 'GET and post are the most important methods of HTTP protocol',
    date: '2022-08-01T16:01:0392',
    important: true
  }
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App notes={notes} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
