import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const ReadPosts = (props) => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        setPosts(props.data);
        console.log(props.data)
    }, [props]);
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <Card key={post.id} 
                        id={post.id} 
                        name={post.name} 
                        color={post.color} 
                        specialization={post.specialization} 
                        strength={post.strength} 
                        dexterity={post.dexterity} 
                        intelligence={post.intelligence} 
                        charisma={post.charisma} 
                        count={post.upvoteCount} 
                   />
                ) : <h2>{'No mates yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadPosts;