import Library from "./Library";


function DontRerender() {
  // This is a pure function
  console.log("From re-render");

  return <div>
  <div>Dont Rerender</div>
  <div>
   <Library />
  </div>
  
</div>
    
}

export default DontRerender;
