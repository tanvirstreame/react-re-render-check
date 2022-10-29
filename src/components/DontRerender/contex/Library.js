import { useState, useContext } from "react";
import Book from "./Book";
import { GlobalContex } from "../../context/GlobalContex";

const book = [
  {
    name: "Kabbo",
    author: "Rabindro"
  },
  {
    name: "Poet",
    author: "Nazrul"
  }
]

function ViewCount() {
  
  const { count } = useContext(GlobalContex);
  return <>
  count :{count}
  </>
}

function ClickCount() {
  const { count, setCount } = useContext(GlobalContex);
  return <button onClick={() => setCount(count + 1)}>Count to render</button>
  
}

function Something() {
  console.log("Contex Something");
  return <div>Something</div>
  
}

function Library() {
  console.log("Contex Library render");
  // Parent state also re render child state
  return (
    <div className="library-area">
      <ClickCount/>
      <Something/>
      <header className="Library-header">
        {book.map((each, key) => <Book
          key={key}
          name={each.name}
          author={each.author}
        />)}
      </header>
      <ViewCount/>
    </div>
  );
}

export default Library;
