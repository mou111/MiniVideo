import React from "react";
import ButtonCard from "./ButtonCard";
const ButtonList = () =>{
    return (
        <div className="flex">
            <ButtonCard name="All"></ButtonCard>
            <ButtonCard name="Spiritual"></ButtonCard>
            <ButtonCard name="Sports"></ButtonCard>
            <ButtonCard name="Plants"></ButtonCard>
            <ButtonCard name="Technology"></ButtonCard>
            <ButtonCard name="Software Engineering"></ButtonCard>
            <ButtonCard name="Money"></ButtonCard>
        </div>
    );
};

export default ButtonList;