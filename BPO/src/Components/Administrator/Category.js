import React,{useState,useEffect} from "react";
import{TextField,Grid,Button} from "@mui/material";
import {useStyles} from "./CategoryCss"
import {postData} from '../ApiServices/ServerServices'
import Swal from "sweetalert2";
import Avatar from '@mui/material/Avatar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';
import { DropzoneArea,DropzoneAreaBase } from "material-ui-dropzone"

const Input = styled('input')({
    display: 'none',
  });


export default function Category(props){
    const classes=useStyles()
    
    const[categoryName,setCategoryName]=useState('')
    const [language, setLanguage] = React.useState('');

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
    
const handleClick=async()=>{
   var formData=new FormData()

  
  formData.append('categoryName',categoryName)
  formData.append('language',language)
  

  

    var result=await postData('category/addcategory',formData,true)
    console.log(result)
    if(result.status)
    { 
        Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Category has been saved',
        showConfirmButton: false,
        timer: 1500
      })}
    else
    {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Fail to Save the Record',
            showConfirmButton: false,
            timer: 1500
          })

    }


    
}






     


return(
    <div className={classes.root}>
        <div className={classes.subdiv}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div className={classes.heading}>
                     Add Category
                    </div>
                 </Grid>
                
                 <Grid item xs={12}>
                     <TextField onChange={(event)=>setCategoryName(event.target.value)} label="Category Name" variant="outlined" fullWidth/>
                 </Grid>
                 <Grid item xs={12}>
                 <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label" >Language/भाषा</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          label="Language/भाषा"
          onChange={handleChange}
          sx={{ 
     
    
        }}
        >
          <MenuItem value={'hindi'}>हिंदी</MenuItem>
          <MenuItem value={'English'}>English</MenuItem>
          
        </Select>
      </FormControl>
                 </Grid>
                 

                 <Grid item xs={12}>
                     <Button variant="contained" onClick={()=>handleClick()}  fullWidth>Add New Category</Button>

                 </Grid>
                 

            </Grid>



        </div>
    </div>
)
}