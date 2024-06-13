import React from "react";
const VideoCard =({card}) =>{
    console.log(card.snippet.title)
    
    const {snippet, statistics } = card;
    const { channelTitle, thumbnails,title} = snippet;
    const OpenVideoLink =() =>{
        console.log('link')
    }
    return (
        <div className="m-2 p-2 w-72">
            <img className="rounded-md cursor-pointer" src = {thumbnails.medium .url} alt ="No image available" onClick={OpenVideoLink()} />
            <ul className="font-semibold">
                <li className="font-semibold">
            {title}
                </li>
                <li>
{channelTitle}
               </li>
{statistics.viewCount} views
            </ul>
           
        </div>
    );
};
export default VideoCard;