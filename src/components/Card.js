import React from 'react'
import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'
import { supabase } from '../client'

const Card = (props) =>  {

  const [count, setCount] = useState(props.votes);
  const updateCount = async (event) => {
    event.preventDefault();
    await supabase
      .from('Posts')
      .update({ votes: count + 1})
      .eq('id', props.id)

    setCount((count) => count + 1);
  }

  return (
      <div className="Card">
          <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          <h2 className="title">{props.title}</h2>
          <p class="created_at"> created: {props.created_at}</p>
          <p class="desc"> {props.desc} </p>
          <a href={props.url} target="_blank" rel="noreferrer" >
            <button className="videoButton">Video</button>
          </a>
          <button className="upvoteButton" onClick={updateCount} >Upvotes: {count}</button>
      </div>
  );
};

export default Card;