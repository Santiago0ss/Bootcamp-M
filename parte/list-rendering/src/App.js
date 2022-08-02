import './App.css';

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

export default function App() {
  return (
  <div>
      {notes.map((note) => {
        return <div key={note.id}><p>
        {note.content}
        </p>
        <small><time>{note.date}</time></small>
        </div>
      })}
  </div>
  );
};
