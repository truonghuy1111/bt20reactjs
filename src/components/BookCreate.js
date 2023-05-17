import React, { useState } from "react";

const BookCreate = ({createBook}) => {
    const [title, setTitle] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle("");
    };
    const handleChange =  (event) => {
        setTitle(event.target.value);
    }
  return (
     <div className="form-create">
        <h3>Add a Book</h3>
        <form onSubmit= {handleSubmit}>
            <label>Title</label>
            <input value={title} onChange={handleChange}/>
            <button>Create!</button>
        </form>
     </div>
     );
};
export default BookCreate;