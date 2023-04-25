import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css'
import { supabase } from '../client'

const EditPost = ({data}) => {

    const {id} = useParams();
    // eslint-disable-next-line
    const [post, setPost] = useState(data.filter(item => item.id == id)[0]);
    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const updatePost = async (event) => {
        event.preventDefault();
        await supabase
            .from('Posts')
            .update({title: post.title, 
                desc: post.desc,
                creator: post.creator,
                reviewer: post.reviewer,
                url: post.url,
                video_source: post.video_source,
                rating: post.rating})
           .eq('id', id);
        
        window.location ="/";
    }

    const deletePost = async (event) => {
        event.preventDefault();

        await supabase
            .from('Posts')
            .delete()
            .eq('id', id);

        window.location ="/";
    }

    return (
        <div>
            <form>
                <label for="title">Title</label> <br />
                <input type="text" id="title" value={post.title} onChange={handleChange} name="title" /><br />
                <br/>

                <label for="url">URL</label> <br />
                <input type="text" id="url" value={post.url} onChange={handleChange} name="url" /><br />
                <br/>

                <label for="creator">Video Creator</label> <br />
                <input type="text" id="creator" value={post.creator} onChange={handleChange} name="creator" /><br />
                <br/>

                <label for="reviewer">Reviewer</label> <br />
                <input type="text" id="reviewer" value={post.reviewer} onChange={handleChange} name="reviewer" /><br />
                <br/>

                <label for="rating">Rating</label><br />
                <input type="number" id="rating" min="0" max="5" step="1" pattern="\d+" value={post.rating} onChange={handleChange} name="rating" /><br />
                <br/>
                
                <label for="desc">Review</label> <br />
                <textarea rows="5" cols="50" id="desc" name="desc" value={post.desc} onChange={handleChange} >
                </textarea>
                <br/>


                <div className="radioBtns" onChange={handleChange}>
                    <label for="vsource1">
                        <input type="radio" id="vsource1" name="video_source" value="YouTube"/>
                        YouTube
                    </label><br />
                    
                    <label for="vsource2">
                    <input type="radio" id="vsource2" name="video_source" value="Other"/>
                        Other
                    </label><br />
                    
                </div>
                <br/>

                <input type="submit" onClick={updatePost} value="Submit" />
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost