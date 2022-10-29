import Library from "./Library";


function MemoWay() {
  console.log("Memo From re-render");

  return <div className="render-component">
    <div className="header">Memo Way</div>
    <Library />
  </div>

}

export default MemoWay;
