import Library from "./Library";


function Rerender() {
  // This is a pure function
  console.log("From re-render");

  return <div>
  <div>Rerender</div>
  <div>
   <Library />
  </div>
  
</div>

}

export default Rerender;
