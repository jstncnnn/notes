import { useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const [notes, SetNotes] = useState([
    {
      id: nanoid(),
      text: "First Note",
      date: "5/2023",
    },
    {
      id: nanoid(),
      text: "Second Note",
      date: "8/2023",
    },
    {
      id: nanoid(),
      text: "Third Note",
      date: "11/2023",
    },
    {
      id: nanoid(),
      text: "New Note",
      date: "8/2023",
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const [isDarkMode, setDarkMode] = useState(true);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    SetNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    SetNotes(newNotes);
  };

  return (
    <div className={`${isDarkMode && "dark-mode"} `}>
      <div className="App">
        <Header handleToggleDarkMode={setDarkMode} />
        <div className="search-bar">
          <Search handleSearchNote={setSearchText} />
        </div>
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
