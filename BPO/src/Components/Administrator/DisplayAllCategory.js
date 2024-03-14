import React,{useState,useEffect} from "react";
import { Button,Grid,TextField } from "@mui/material";
import { getData } from "../ApiServices/ServerServices";
import MaterialTable from "@material-table/core";
import {useStyles} from "./DisplayAllCategoryCss"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { postData } from "../ApiServices/ServerServices";
import Swal from "sweetalert2";
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';

import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from "@mui/material/styles";
const Input = styled('input')({
  display: 'none',
});


export default function DisplayAllCatgories(props){  

  var theme =useTheme()
  const classes=useStyles()   
  const matches=useMediaQuery(theme.breakpoints.down(700))
const[categories,setCategories]=useState([])
const[categoryId,setCategoryId]=useState('')
const[categoryName,setCategoryName]=useState('')
const[message,setMessage]=useState('')
    const[showBtn,setShowBtn]=useState(false)
const[open,setOpen]=useState(false)

const handleEdit=async(rowData)=>{
  var body={categoryName:categoryName}
  console.log(body)
  var response=await postData(`category/${categoryId}/update`,body)
  if(response.status)
  {
    setMessage('Category has been Edited ')
    fetchAllCategories()
  }
  else{
    setMessage('Fail to Edit the Category')
  }
  
}




const handleDelete=async(rowData)=>{
  
  Swal.fire({
    title: 'Do you want to delete the selected record?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Delete',
    denyButtonText: `Don't Delete`,
  }).then(async(result) => {
    /* Read more about isConfirmed, isDenied below */
    
    if (result.isConfirmed) {
      var body={id:rowData._id}
      var response=await postData(`category/${rowData._id}/delete`)
      if(response.status)
      { Swal.fire('Category deleted Successfully', '', 'success')
      fetchAllCategories()
      }
      else{
        Swal.fire('Server Error', '', 'error')
      }
     
    } else if (result.isDenied) {
      Swal.fire('Your Record is Safe', '', 'info')
    }
  })

  


}  


const handleClose=()=>{
  setOpen(false)
}

const handleOpenDialog=(rowData)=>{
  setMessage('')
  setCategoryId(rowData._id)
  setCategoryName(rowData.categoryName)
  setOpen(true)
}

const editView=()=>{
  return(
    <div className={classes.editRoot}>
        <div className={classes.editSubdiv}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div className={classes.heading}>
                     Edit Category
                    </div>
                 </Grid>
                 <Grid item xs={12}>
                     <TextField value={categoryName} onChange={(event)=>setCategoryName(event.target.value)} label="Category Name" variant="outlined" fullWidth/>
                 </Grid>
                 <Grid item xs={12}>
                     <Button variant="contained" onClick={()=>handleEdit()}   fullWidth>Edit State</Button>
                 </Grid>

                 <Grid item xs={12} className={classes.messageStyle}>
                   {message}
                 </Grid>
                
                
                 
            </Grid>


        </div>
    </div>
)
}


const openDialog=()=>{
  return(
    <div>
    <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    
    <DialogContent>
      {editView()}
    </DialogContent>
    <DialogActions>
      <Button onClick={()=>handleClose()} autoFocus>
        Close
      </Button>
    </DialogActions>
  </Dialog>
</div>

  )
}




function displayTable() {
    return (
      <MaterialTable
      title={"Category List"}
        data={categories}
        style={{}}
        columns={[
            {
              title: "Category Id",
              field: "_id",
             
            },
            {
              title: "Category Name",
              field: "categoryName",
            },
            
           
        ]}
        actions={[
          {
            icon: () => <EditIcon />,
            tooltip: "Edit State",
            onClick: (event, rowData) => {
              handleOpenDialog(rowData)
            },
          },
          {
            icon: () => <DeleteIcon />,
            tooltip: "Delete State",
            onClick: (event, rowData) => {
              const rowJson = JSON.stringify(rowData, null, 2);
              handleDelete(rowData)
              
            },
          },
        ]}
       
      />
    );
  }



    const fetchAllCategories=async()=>{
        const result=await getData('category/displayallcategories')
        
        setCategories(result)
    }


    useEffect(function(){
       fetchAllCategories()

    },[])

    return(
      
        
        <Grid container spacing={2} style={{  display:"flex",
        justifyContent:'center',
        alignItems:'center'}}>
          <Grid item xs={12} sm={8} style={{marginTop:20,fontSize:matches?10:20}}>
        {displayTable()}</Grid>  {openDialog()}</Grid>

    )
    
}