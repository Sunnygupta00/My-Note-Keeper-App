import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // Storing Input From User
  const [store, createStore] = useState([]);

  // Note we are using CreateStore to store and asWell as Updation

  // Function to insert a note
  function insertNote(item) {
    createStore((prev) => {
      return [...prev, item]; // prev+ curr
    });
  }
  // Function to delete note
  function deleteNote(noteIndex) {
    createStore(() => {
      return store.filter((item, index) => {
        return index !== noteIndex;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={insertNote} />
      {store.map((x, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={x.title}
            content={x.content}
            removeIt={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
