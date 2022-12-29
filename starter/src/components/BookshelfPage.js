import "../App.css";
import { useState, useEffect } from "react";
import BookShelf from "./BookShelf";
import * as BookAPI from "../BooksAPI";
// import SearchPage from "./SearchPage";
import { Link } from "react-router-dom"

function BookshelfPage() {
  const [booksCollection, setBooksCollection] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      const res = await BookAPI.getAll();
      setBooksCollection(res);
    };
    getBooks();
    return () => {
      console.log("cleanup");
    };
  }, []);
  const updateBookShelf = async (e, book) => {
    console.log("working");
    await BookAPI.update(book, e.target.value);
    const res = await BookAPI.getAll();
    setBooksCollection(res);
    e.target.value = "";
  };
  
  return (
    <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelf
                shelf={"Currently Reading"}
                collection={booksCollection}
                onUpdateBook={updateBookShelf}
              />
              <BookShelf
                shelf={"Want to Read"}
                collection={booksCollection}
                onUpdateBook={updateBookShelf}
              />
              <BookShelf
                shelf={"Read"}
                collection={booksCollection}
                onUpdateBook={updateBookShelf}
              />
            </div>
            <div className="open-search">
              <Link to="/search">
              <a>Add a book</a>
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
}

export default BookshelfPage;