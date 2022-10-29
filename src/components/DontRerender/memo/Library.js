import { useState } from "react";
import Book from "./Book";

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
function Library() {
  console.log("Memo Library render");
  const [count, setCount] = useState(0);
  // Parent state also re render child state
  return (
    <div className="library-area">
      <button onClick={() => setCount(count + 1)}>Count to render</button>
      <header className="Library-header">
        {book.map((each, key) => <Book
          key={key}
          name={each.name}
          author={each.author}
        />)}
      </header>
      count :{count}
    </div>
  );
}

export default Library;
