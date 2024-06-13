import React from "react";

const ButtonCard = ({name}) =>{
    return (
        <div>
            <button className="px-5 py-2 m-2 bg-gray-100 font-semibold rounded-lg">
                {name}
            </button>
        </div>
    );
};

export default ButtonCard;