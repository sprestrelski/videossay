import React from 'react'
import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'
import { supabase } from '../client'

const Card = (props) =>  {

  const [count, setCount] = useState(props.count);
  const updateCount = async (event) => {
    event.preventDefault();
    await supabase
      .from('Crewmates')
      .update({ upvoteCount: count + 1})
      .eq('id', props.id)

    setCount((count) => count + 1);
  }

  return (
      <div className="Card">
          <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          <h2 className="name">{props.name}</h2>
          <h3 className="specialization">{props.specialization}</h3>
          <p className="strength">Strength: {props.strength}</p>
          <p className="dexterity">Dexterity: {props.dexterity}</p>
          <p className="intelligence">Intelligence: {props.intelligence}</p>
          <p className="charisma">Charisma: {props.charisma}</p>
          <button className="upvoteButton" onClick={updateCount} >Upvotes: {count}</button>
      </div>
  );
};

export default Card;