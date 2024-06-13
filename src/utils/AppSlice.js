import { createSlice } from "@reduxjs/toolkit";
const AppSlice =  createSlice(
{
    name:"app",
    initialState:{
        isMenuOpen:true,
    },
    reducers:
    {
        toggleMenu :(state) =>{
         state.isMenuOpen = !state.isMenuOpen;
        },
        doRandomStuff :(state)=>{

        },
    },
}

);

export const {toggleMenu ,doRandomStuff} = AppSlice.actions;
export default AppSlice.reducer;