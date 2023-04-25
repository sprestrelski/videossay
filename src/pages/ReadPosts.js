import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom'

const ReadPosts = (props) => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        setPosts(props.data);
        console.log(props.data)
    }, [props]);
    
    const sortVotes = (event) => {
        setPosts(posts.sort(
            (p1, p2) => (p1.votes < p2.votes) ? 1 : (p1.votes > p2.votes) ? -1 : 0)
        )
        
    }

    const sortRecent = (event) => {
        setPosts(posts.sort(
            (p1, p2) => (p1.created_at < p2.created_at) ? 1 : (p1.created_at > p2.created_at) ? -1 : 0)
        )
    }

    const sortTitle = (event) => {
        setPosts(posts.sort(
            (p1, p2) => (p1.title > p2.title) ? 1 : (p1.title < p2.title) ? -1 : 0)
        )
    }

    return (
        <div>
       
        <div className="ReadPosts">
        <p className="sortHeader">Sort by:  
        <Link to="/"><button className="sortBtn" onClick={sortVotes}> Votes </button></Link>
        <Link to="/"><button className="sortBtn" onClick={sortRecent}> Recent </button></Link>
        <Link to="/"><button className="sortBtn" onClick={sortTitle}> Title </button></Link>
        </p>
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <Card key={post.id}
                        id={post.id} 
                        created_at={post.created_at}
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
        </div>
    )
}

export default ReadPosts;