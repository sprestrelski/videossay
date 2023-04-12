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
            .from('Crewmates')
            .update({name: post.name, color: post.color, specialization: post.specialization,
                        strength: post.strength, dexterity: post.dexterity, 
                        intelligence: post.intelligence, charisma: post.charisma})
           .eq('id', id);
        
        window.location ="/";
    }

    const deletePost = async (event) => {
        event.preventDefault();

        await supabase
            .from('Crewmates')
            .delete()
            .eq('id', id);

        window.location ="/";
    }

    return (
        <div>
            <form>
                <label for="name">Name</label> <br />
                <input type="text" id="name" value={post.name} onChange={handleChange} name="name" /><br />
                <br/>

                <label for="color">Color</label><br />
                <input type="color" id="color" value={post.color} onChange={handleChange} name="color" /><br />
                <br/>

                <div className="radioBtns" onChange={handleChange}>
                    <label for="spec1">
                        <input type="radio" id="spec1" name="specialization" value="Crewmate" defaultChecked />
                        Crewmate
                    </label><br />
                    
                    <label for="spec2">
                    <input type="radio" id="spec2" name="specialization" value="Imposter"/>
                        Imposter
                    </label><br />
                     
                    <label for="spec3">
                    <input type="radio" id="spec3" name="specialization" value="Ghost"/>
                        Ghost
                    </label><br />   
                </div>

                <br/>

                <label for="strength">Strength</label><br />
                <input type="number" id="strength" min="0" max="20" value={post.strength} onChange={handleChange} name="strength" /><br />
                <br/>
                
                <label for="dexterity">Dexterity</label><br />
                <input type="number" id="dexterity" min="0" max="20" value={post.dexterity} onChange={handleChange} name="dexterity" /><br />
                <br/>

                <label for="intelligence">Intelligence</label><br />
                <input type="number" id="intelligence" min="0" max="20" value={post.intelligence} onChange={handleChange} name="intelligence" /><br />
                <br/>

                <label for="charisma">Charisma</label><br />
                <input type="number" id="charisma" min="0" max="20" value={post.charisma} onChange={handleChange} name="charisma" /><br />
                <br/>
                <input type="submit" onClick={updatePost} value="Submit" />
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost