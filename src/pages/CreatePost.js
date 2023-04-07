import React, { useState } from 'react';
import { supabase } from '../client'
import './CreatePost.css'

const CreatePost = () => {
    const [post, setPost] = useState({title: "", author: "", description:""});
    const handleChange = (event) => {
        const {name, value} = event.target;

        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }
    const createPost = async (event) => {
        event.preventDefault();

        await supabase
            .from('Posts')
            .insert({title: post.title, author: post.author, description: post.description})
            .select();

        window.location = "/";
    }



    return (
        <div>
            <form>
                <label for="title">Title</label> <br />
                <input type="text" id="title" value={post.title} onChange={handleChange} name="title" /><br />
                <br/>

                <label for="author">Author</label><br />
                <input type="text" id="author" value={post.author} onChange={handleChange}name="author" /><br />
                <br/>

                <label for="description">Description</label><br />
                <textarea rows="5" cols="50" value={post.description} onChange={handleChange} name="description">
                </textarea>
                <br/>
                <input type="submit" onClick={createPost} value="Submit"/>
            </form>
        </div>
    )
}

export default CreatePost