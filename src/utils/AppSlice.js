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
        closeMenu:(state)=>{
            state.isMenuOpen=false;
        }
    },
}

);

export const {toggleMenu ,doRandomStuff,closeMenu} = AppSlice.actions;
export default AppSlice.reducer;