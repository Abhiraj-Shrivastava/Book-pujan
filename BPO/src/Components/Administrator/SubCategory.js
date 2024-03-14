import React,{useState,useEffect} from "react";
import{TextField,Grid,Button} from "@mui/material";
import {useStyles} from "./CategoryCss"
import {postData,getData} from '../ApiServices/ServerServices'

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


const SubCategory = () => {
    const classes=useStyles()
    
    const[subCategoryName,setSubCategoryName]=useState('')
    const[subCategoryId,setSubCategoryId]=useState('')
    const[categoryId,setCategoryId]=useState('')
    const[categories,setCategories]=useState([])
    const[price,setPrice]=useState('')
    
const handleClick=async()=>{
   var formData=new FormData()

  
  formData.append('subcategoryName',subCategoryName)
  formData.append('price',price)
  formData.append('categoryId',categoryId)
  

  

    var result=await postData('subcategory/addsubcategory',formData,true)
    console.log(result)
    if(result.status)
    { 
        Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'SubCategory has been saved',
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

const fetchAllCategories=async()=>{
    const result=await getData('category/displayallcategories')
    
    setCategories(result)
}


useEffect(function(){
   fetchAllCategories()

},[])

const fillCategories=()=>{

    return categories.map((item)=>{
return(

<MenuItem value={item._id}>{item.categoryName}</MenuItem>

)

    })
}

     
const handleCategoryChange=(event)=>{
    setCategoryId(event.target.value)
    }
    

return(
    <div className={classes.root}>
        <div className={classes.subdiv}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div className={classes.heading}>
                     Add Sub Category
                    </div>
                 </Grid>
                 <Grid item xs={12}>
                 <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Category</InputLabel>
                 <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={categoryId}
                    label="Category"
                    onChange={(event)=>handleCategoryChange(event)}
                    > 
                    {fillCategories()}
                  </Select>
                  </FormControl>



                 </Grid>
                 <Grid item xs={12}>
                     <TextField onChange={(event)=>setSubCategoryName(event.target.value)} label="Sub Category Name" variant="outlined" fullWidth/>
                 </Grid>
                 <Grid item xs={12}>
                     <TextField onChange={(event)=>setPrice(event.target.value)} label="Price" variant="outlined" fullWidth/>
                 </Grid>
                 

                 <Grid item xs={12}>
                     <Button variant="contained" onClick={()=>handleClick()}  fullWidth>Add New Sub Category</Button>

                 </Grid>
                 

            </Grid>



        </div>
    </div>
)
}

export default SubCategory
