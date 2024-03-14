import React,{useState,useEffect} from "react";
import { useStyles } from "./SideBarCss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function SideBar(props){
  const classes=useStyles()
return(
    <div className={classes.rootDiv}>
    
    <div sx={{ width: 250, maxWidth:'100%'}}>
  
    
      <MenuList>
      
      <MenuItem>
          <ListItemIcon>
            <DashboardIcon fontSize="small" className={classes.iconStyle} />
          </ListItemIcon>
          <ListItemText className={classes.dashboardTextStyle}>DashBoard</ListItemText>
         
        </MenuItem>


        <Link to="/dashboard/category" className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <AddIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Add Categories</ListItemText>
         
        </MenuItem>
          </Link>

          <Link to="/dashboard/displayallcategory" className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <RemoveRedEyeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Categories</ListItemText>  
        </MenuItem>
        </Link>

        <Link to="/dashboard/subcategory" className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <AddIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Add Sub Categories</ListItemText>
          
        </MenuItem>
        </Link>
        <Link to="/dashboard/displayallsubcategory" className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <RemoveRedEyeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Sub Categories</ListItemText>
          
        </MenuItem>
        </Link>
        <Link to="/dashboard/displayallusers" className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <RemoveRedEyeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Users</ListItemText>
          
        </MenuItem>
        </Link>
        <Link to="/dashboard/displayallbookings" className={classes.link}>
        <MenuItem>
          <ListItemIcon>
            <RemoveRedEyeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Bookings</ListItemText>
          
        </MenuItem>
        </Link>
        
        <Divider />
        
      </MenuList>
    
    </div>
   
    </div>
)


}