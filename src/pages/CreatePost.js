import React, { useState } from 'react';
import { supabase } from '../client'
import './CreatePost.css'

const CreatePost = () => {
    const [post, setPost] = useState({name: "", color: "#FF0000", specialization: "Crewmate", strength: 0, dexterity: 0, intelligence: 0, charisma: 0, upvoteCount: 0});
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
            .from('Crewmates')
            .insert({name: post.name, color: post.color, specialization: post.specialization,
                     strength: post.strength, dexterity: post.dexterity, 
                     intelligence: post.intelligence, charisma: post.charisma})
            .select();

        window.location = "/";
    }


    // name, color, specialization, strength, dexterity, intelligence, charisma
    return (
        <div>
            <form>
                <label for="name">Name</label> <br />
                <input type="text" id="name" value={post.name} onChange={handleChange} name="name" /><br />
                <br/>

                <label for="color">Color</label><br />
                <input type="color" id="color" value={post.color} onChange={handleChange} name="color" /><br />
                <br/>

                <div onChange={handleChange}>
                    <input type="radio" id="spec1" name="specialization" value="Crewmate" defaultChecked />
                    <label for="spec1">Crewmate</label>
                    <input type="radio" id="spec2" name="specialization" value="Imposter"/>
                    <label for="spec2">Imposter</label>
                    <input type="radio" id="spec3" name="specialization" value="Ghost"/>
                    <label for="spec3">Ghost</label>
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

                <br/>
                <input type="submit" onClick={createPost} value="Submit"/>
            </form>
        </div>
    )
}

export default CreatePost