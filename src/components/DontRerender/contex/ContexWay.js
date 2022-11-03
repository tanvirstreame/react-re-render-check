import Library from "./Library";
import { GlobalContex } from "../../../context/GlobalContex";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return  state - 1;
    default:
      return state;
  }
}


function ContexWay() {
  // This is a pure function
  console.log("Contex from re-render");

  const [state, dispatch] = useReducer(reducer, 0);

  return <div>
    <div className="header">Contex Way</div>
    <div><GlobalContex.Provider value={{ state, dispatch }}>
      <Library />
    </GlobalContex.Provider>
    </div>
  </div>
}

export default ContexWay;
