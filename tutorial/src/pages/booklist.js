import React from "react";

// CSS
import "./index.css"; // CSS

function Booklist() {
  return (
    <div>
      <h1>Book List</h1>
      <section className="booklist">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </section>
    </div>
  );
}

const author = "Ann Whitford Paul"

const Book = () => {
  const title = "If Animals Kissed Good Night";

  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg"
        alt=""
      />
      <h1>{title} </h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

export default Booklist;
