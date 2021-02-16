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
        > 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam accusantium aut, voluptate consequatur error sit tempora illo suscipit officia numquam reprehenderit saepe. Aspernatur, distinctio laborum aperiam atque ipsam sapiente consectetur!</p>
        </Book>
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

  // destructuting props
  const {img, title, author, children} = props

  return (
    <article className="book">
      <img src={img} alt="elephant drawing" />
      <h1>{title} </h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

export default Booklist;
