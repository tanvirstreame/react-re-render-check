import { useState, useContext } from "react";
import Book from "./Book";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../../redux/slice/counterSlice';

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
  const count = useSelector((state) => state.counter.value)
  return <>
  count :{count}
  </>
}

function ClickCount() {
  const dispatch = useDispatch()
  return <button onClick={() => dispatch(increment())}>Count to render</button>
  
}

function Something() {
  console.log("Redux Something");
  return <div>Something</div>
  
}

function Library() {
  console.log("Redux library render");
  
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
