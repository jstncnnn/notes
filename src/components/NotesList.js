import React from "react";
import Note from "./Note";
import AddNote from "../AddNote";
import "./NotesList.css";

function NotesList({ notes, handleAddNote, handleDeleteNote }) {
  return (
    <div className="container">
      <div className="notes-list">
        {notes.map((note, nanoid) => (
          <Note
            key={nanoid}
            id={note.id}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
          />
        ))}
        <AddNote handleAddNote={handleAddNote} />
      </div>
    </div>
  );
}

export default NotesList;
