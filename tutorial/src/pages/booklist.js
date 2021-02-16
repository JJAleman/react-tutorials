import React from "react";

// CSS
import "./index.css"; // CSS

// Set up vars
const firstBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg",
  title: "If Animals Kissed Good Night",
  author: "Ann Whitford Paul",
};

const secondBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth",
};

function Booklist() {
  return (
    <div>
      <h1>Book List</h1>
      <section className="booklist">
        <Book
          img={firstBook.img}
          title={firstBook.title}
          author={firstBook.author}
        />
        <Book
          img={secondBook.img}
          title={secondBook.title}
          author={secondBook.author}
        />
        <Book
          img={firstBook.img}
          title={firstBook.title}
          author={firstBook.author}
        />
        <Book
          img={secondBook.img}
          title={secondBook.title}
          author={secondBook.author}
        />
      </section>
    </div>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt="elephant drawing" />
      <h1>{props.title} </h1>
      <h4>{props.author}</h4>
    </article>
  );
};

export default Booklist;
