import { memo } from "react";

function Book({ name, author}) {
  console.log("Memo Book render");
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

export default memo(Book);
