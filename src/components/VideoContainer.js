import React, {useEffect, useState} from "react";
import {YOUTUBE_URL} from  "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
const VideoContainer =() =>{
    const [videolist,setVideoList] = useState([]);

    useEffect (() =>{
        getVideos();
    },[]);
   const getVideos = async () =>{
    const data = await fetch(YOUTUBE_URL);
    const jsondata = await data.json();
    setVideoList(jsondata.items);
    }
    if (videolist.length === 0) 
    return null
   else
    return (<div className="flex flex-wrap ">
      {console.log(videolist.length)}
         { videolist.map((video) => (
            <Link to ={"/watch?id="+video.id} >
           <VideoCard  key ={video.id} card = {video}/>
           </Link>
         ))}
    
    
    </div>
    );
};
export default VideoContainer;