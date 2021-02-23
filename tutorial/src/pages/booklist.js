import React from "react";

// CSS
import "./index.css"; // CSS

// Set up vars
const books = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg",
    title: "If Animals Kissed Good Night",
    author: "Ann Whitford Paul",
  },
  {
    id: 2,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    id: 3,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/91Fqo5QznlL._AC_UL200_SR200,200_.jpg",
    title: "Firefly Lane: A Novel",
    author: "Kristin Hannah",
  },
];

// ********* Example of how you can render an array or list *******

// const names = ["john", "david", "benny"];

// const newNames = names.map((name) => {
//   return <h1>{name}</h1>
//   console.log(name);
// })
// console.log(newNames)
//*****************************************************************

function Booklist() {
  return (
    <div>
      <h1>Best Seller Book List</h1>
      <p>Made by Juan</p>
      <section className="booklist">
        {books.map((book) => {
          return (
            <Book key={book.id} {...book}></Book>
          );
        })}
      </section>
    </div>
  );
}

const Book = (props) => {
  // destructuting props
  const { img, title, author } = props;

  return (
    <article className="book">
      <img src={img} alt="elephant drawing" />
      <h1>{title} </h1>
      <h4>{author}</h4>
    </article>
  );
};

export default Booklist;
