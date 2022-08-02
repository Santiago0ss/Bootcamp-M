import './App.css';
import {useState} from 'react'
import { Note } from './note.js'

export default function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  // const [newNote, setNewNote] = useState('')

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('crear nota');
    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    };
    
    setNotes(notes.concat(noteToAddToState));
    setNewNote("");
  };

  const handleShowAll = () => {
    setShowAll(() => !showAll)
  }
  

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>{ showAll ? 'Show only import' : 'Show all'}</button>
    <ol>
      {notes
      .filter(note => {
        if (showAll === true) return true;
        return note.important === true;
      })
      .map((note) => (
        <Note key={note.id} {...note} />
      ))}
      </ol>
      <form onSubmit={handleSubmit}>
          <input type='text' onChange={handleChange} value={newNote}/>
          <button>Crear nota</button>
        </form>
    </div>
  );
}