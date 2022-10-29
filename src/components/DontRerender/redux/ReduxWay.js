import Library from "./Library";
import { useState } from "react";
import { store } from '../../../redux/store';
import { Provider } from 'react-redux'


function ReduxWay() {
  // This is a pure function
  console.log("Redux from re-render");

  const [count, setCount] = useState(0);

  return <div>
    <div className="header">Redux Way</div>
    <div>
      <Provider store={store}>
        <Library />
      </Provider>
    </div>

  </div>

}

export default ReduxWay;
