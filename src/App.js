import './App.css';
import React, { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import { Link } from 'react-router-dom'
import { supabase } from './client'

const App = () => {
  
  const [posts, setPosts] = useState([]);
 
  useEffect( () => {
    const fetchPosts = async () => {
      const {data} = await supabase
        .from('Crewmates')
        .select()
        .order('created_at', {ascending: true})
      
      // set state of posts
      setPosts(data);
    }

    fetchPosts();
  }, []);

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadPosts data={posts}/>
    },
    {
      path:"/edit/:id",
      element: <EditPost data={posts} />
    },
    {
      path:"/new",
      element: <CreatePost />
    }
  ]);

  return ( 

    <div className="App">

      <div className="header">
        <h1>crewmates</h1>
        <Link to="/"><button className="headerBtn"> Home  </button></Link>
        <Link to="/new"><button className="headerBtn"> Create Mate </button></Link>
        <Link to="/gallery"><button className="headerBtn"> Gallery  </button></Link>
      </div>
        {element}
    </div>

  );
}

export default App;
