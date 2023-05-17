import React from "react";
import BookShow from "./BookShow";

const BookList = ({ books, onDelete, onEdit }) => {
    const listItems = books.map((book) => (
    <BookShow onEdit={onEdit}
    onDelete={onDelete}
    book={book} />
    ));     
    return (
    <div className="list-books">
        <h2>Reading List</h2>
        {listItems}
        </div>
    );
};
export default BookList;