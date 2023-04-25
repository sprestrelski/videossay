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

  const returnDate = () => {
    return props.created_at.split('T')[0];
  }

  return (
      <div className="Card">
          <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          <Link to={'/' + props.id} style={{ textDecoration: 'none' }}>
            <h2 className="title">{props.title}</h2>
            <p class="created_at"> {returnDate()} | {props.reviewer} | {count} votes </p>
            <p class="desc"> {props.desc} </p>
          </Link>
          <a href={props.url} target="_blank" rel="noreferrer" >
            <button className="videoBtn">Video</button>
          </a>
          <button className="upvoteBtn" onClick={updateCount} >Upvote</button>
      </div>
  );
};

export default Card;