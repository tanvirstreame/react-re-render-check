import Library from "./Library";
import { GlobalContex } from "../../../context/GlobalContex";
import { useState } from "react";


function ContexWay() {
  // This is a pure function
  console.log("Contex from re-render");

  const [count, setCount] = useState(0);

  return <div>
    <div className="header">Contex Way</div>
    <div><GlobalContex.Provider value={{ count, setCount }}>
      <Library />
    </GlobalContex.Provider>
    </div>
  </div>
}

export default ContexWay;
