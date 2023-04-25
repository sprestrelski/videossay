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
                        title={post.title}
                        desc={post.desc}
                        creator={post.creator}
                        reviewer={post.reviewer}
                        url={post.url}
                        video_source={post.video_source}
                        rating={post.rating} 
                        votes={post.votes} 
                   />
                ) : <h2>{'No posts yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadPosts;