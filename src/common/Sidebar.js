import React from "react";
//import store from "../utils/store";
import { useSelector } from "react-redux";
//import appSlice from "../utils/AppSlice";
const Sidebar =() =>{
    const store = useSelector(store =>store.app.isMenuOpen);
    if(!store) return null;
    else
    return <div className="p-5 shadow-lg w-48">        
       <ul className="font-semibold py-2">
      <li >
        Home
      </li>
      <li>
        Shorts
      </li>
      <li>
        Subscriptions
      </li>
       </ul>
       <h1 className="font-bold">
          Your channel  
        </h1>
       <ul className="font-semibold">
       
      <li>
        History
      </li>
      <li>
        Playlists
      </li>
      <li>
        Your Videos
      </li>
       </ul>
    </div>
};
export default Sidebar;