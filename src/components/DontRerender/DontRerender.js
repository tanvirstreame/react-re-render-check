import Library from "./contex/Library";
import ReduxWay from "./redux/ReduxWay";
import ContexWay from "./contex/ContexWay";
import MemoWay from "./memo/MemoWay";

function DontRerender() {
  // This is a pure function
  console.log("Dont ReFrom re-render");


  return <div>
    <div className="dont-render-component-header">Dont Rerender</div>
    <div className="dont-render-component">
      <ContexWay/>
      <MemoWay/>
      <ReduxWay/>
    </div>
  </div>

}

export default DontRerender;
