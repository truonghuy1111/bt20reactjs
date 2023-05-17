import React,{useState} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import './style.css';
import axios from 'axios';

const App = () => {
const[books, setBooks] = useState([]);
    const createBook = async (title) =>{
      const response = await axios.post("http://localhost:3001/books", {
title,
});
        const updatedBook = [
            ...books,
         ...response.data
        ];
        setBooks(updatedBook);
        console.log(books);
    };
    const UpdateBookById = (id, new_title) =>{
      const updatedBook = books.map((book) =>
      book.id === id? {...book, title: new_title} : book);
      setBooks(updatedBook);
    }
    const deleteBook = (id) =>{
        const updatedBook = books.filter(book=> book.id !==id);
        setBooks(updatedBook);
    }
    const fechtBooks = async () =>{
      const response = await axios.get("http://localhost:3001/books");
      setBooks(response.data);
    };
    fechtBooks();
  return (
    <div>
        <BookCreate createBook={createBook}/>
        <BookList onEdit={UpdateBookById} books={books} onDelete={deleteBook}/>
    </div>
  )
}

export default App;
