import Library from "./Library";


function Rerender() {
  // This is a pure function
  console.log("From re-render");

  return <div className="render-component">
    <div className="render-component-header">Rerender</div>
    <Library />
  </div>

}

export default Rerender;
