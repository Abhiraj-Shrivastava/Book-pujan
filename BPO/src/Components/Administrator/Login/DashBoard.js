import React,{useState,useEffect} from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import TopBar  from "./TopBar";
import SideBar from "./SideBar";
import Category from "../Category";
import DisplayAllCatgories from "../DisplayAllCategory";
import SubCategory from "../SubCategory";
import DisplayAllSubCatgories from "../DisplayAllSubCategory";
import DisplayAllUsers from "../DisplayAllUsers";
import DisplayAllBookings from "../DisplayAllBookings";
import { Grid } from "@mui/material";
export default function DashBoard(props){

return(
    <div>
    <TopBar/>
   
        <Grid container spacing={2} style={{display:'flex',flexDirection:'row'}}>
          <Grid item xs={12} sm={2}> 
    <SideBar/>
    </Grid>
    <Grid item xs={12} sm={10}>
       <Routes>
       <Route element={<Category/>} path="/category" /> 
              <Route element={<DisplayAllCatgories/>} path="/displayallcategory" /> 
              <Route element={<SubCategory/>} path="/subcategory" /> 
              <Route element={<DisplayAllSubCatgories/>} path="/displayallsubcategory" /> 
              <Route element={<DisplayAllUsers/>} path="/displayallusers" /> 
              <Route element={<DisplayAllBookings/>} path="/displayallbookings" /> 
       </Routes>
       </Grid>
       </Grid>
    </div>
)


}