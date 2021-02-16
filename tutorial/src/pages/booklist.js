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

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg"
    alt=""
  />
);

const Title = () => <h1> If Animals Kissed Good Night </h1>;

const Author = () => <h4 style={{color:'#617d98', fontSize:'0.75rem', margin:'0.25rem'}}> Ann Whitford Paul </h4>;

export default Booklist;
