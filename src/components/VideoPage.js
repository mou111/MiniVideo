import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/AppSlice";
import { useSearchParams } from "react-router-dom";
const VideoPage =() =>{
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("id"))
    const dispatch = useDispatch();
    //https://www.youtube.com/embed/uOHOgI66C28?si=C1ZiO3MlieKuQmy2
   useEffect(()=>{
    dispatch(closeMenu());
   })
    return <div>
       <iframe width="1000" height="515" 
       src={"https://www.youtube.com/embed/" + searchParams.get("id") }
       title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
       web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
   
};
export default VideoPage;