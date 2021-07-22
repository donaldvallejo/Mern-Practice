import React, { useState } from 'react';
import axios from 'axios';

const Form = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title, description)
        // Todo: if title or description is empty, return from the function
        if(!title || !description){
            return
        }

        const newTitle = {
            title,
            description         
        }
        axios.post("http://localhost:5000/api/post/new", newTitle)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name="title" onChange={e => setTitle(e.target.value)} value={title} placeholder="Title" />
            <textarea className="titleTextArea" placeholder="title description" onChange={e => setDescription(e.target.value)}></textarea>
            <button type="submit">Submit</button>
        </form>
    )
}
export default Form;