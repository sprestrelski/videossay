import React, { useState, useEffect } from 'react';
import { supabase } from '../client'
import { useParams } from 'react-router-dom'
import YTEmbed from '../components/YTEmbed';

const DetailPost = () => {
    
    const params = useParams();
    const [post, setPost] = useState(null);
    useEffect(() => {
        const fetchPost = async () => {
            const data = await supabase
                .from('Posts')
                .select()
                .eq("id", params.id);
            setPost(data.data[0]);
        }
        fetchPost().catch(console.error);
       
    }, []);    

    const returnDate = () => {
        return post.created_at.split('T')[0];
      }

    // https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url
    const getYouTubeID = () => {
        let url = post.url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        let video_id = (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0]
        console.log(video_id);
        //return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
        // var video_id = post.url.split("v=")[1];
        // var ampersandPosition = video_id.indexOf('&');
        // if(ampersandPosition !== -1) {
        //     video_id = video_id.substring(0, ampersandPosition);
        // }
        return video_id;
    }
    return (
        <div>
           { post ? <div>
                <h1>{post.title}</h1>
                <p className="creator">{post.creator}</p>
                <p className="desc">
                    {post.reviewer} | {post.rating}/5 ⭐ | {returnDate()} <br/>
                    {post.desc}
                </p>


                { post.video_source === "YouTube" ? 
                    <div>
                        <YTEmbed embedId={getYouTubeID()}/>

                    </div>
                : <div></div>
                }
            </div>
            :
                <div></div>
            }
        </div>
    )
}

export default DetailPost