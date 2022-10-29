import React, { memo } from "react";
function Book({ name, author}) {
  console.log("Contex Book render");
  return (
    <div className="Book">
      <header className="Book-header">
        <p>
          name: {name}
        </p>
        <p>
          author: {author}
        </p>
      </header>
    </div>
  );
}

export default Book;
