import React from "react";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";
const Body =() =>{
    return <div>
        <div className="m-5">
            <ButtonList/>
        </div>
        <div className="m-5">
            <VideoContainer/>
        </div>
    </div>
};
export default Body;