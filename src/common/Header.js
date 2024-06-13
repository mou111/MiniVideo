import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";

const Header =() =>{
   const dispatch = useDispatch();
   const toggleSideBar =() =>{
      dispatch(toggleMenu());
    };
    return <div className="flex shadow-lg">
        <div className="w-1/5 flex">
        <img className="h-8 my-2 cursor-pointer" src="https://th.bing.com/th/id/OIP.ovcJ2Zaf-EkM_Emrh76B6QHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7000000000000000000000000000" alt="menubar" onClick={() => toggleSideBar()}/>
        <img className="h-12" src="https://www.gstatic.com/youtube/img/promos/growth/6b2c0a27d2ee8c6959a42405414ddb30b0b7b0ea0dbb62b7e499fab3a36f96c8_244x112.webp" alt="Meet the speed painting community"></img>
        </div>
        <div className="w-4/6 col-span-10 px-10">
         <input className="w-5/6 border border-gray-200 rounded-l-full p-2">
         </input>
         <button className=" border border-gray-200 px-2 py-2 rounded-r-full">
                  🔍
         </button>
        </div>
        <div className="w-1/5 col-span-1 m-2 p-2">         
            <ul className="flex justify-end space-x-4">
                <li>
                Notifications
                </li>
               <li>
                Login
               </li>
            </ul>
        </div>
    </div>
};
export default Header;