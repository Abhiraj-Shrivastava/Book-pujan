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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from "@mui/material/styles";
const Input = styled('input')({
  display: 'none',
});


export default function DisplayAllSubCatgories(props){  

  var theme =useTheme()
  const classes=useStyles()   
  const matches=useMediaQuery(theme.breakpoints.down(700))  
  const[subCategories,setSubCategories]=useState([])
  const[categoryId,setCategoryId]=useState('')
  const[subCategoryId,setSubCategoryId]=useState('')
  const[subCategoryName,setSubCategoryName]=useState('')
  const[categories , setCategories]=useState([])
  const[price , setPrice]=useState([])
  const[open,setOpen]=useState(false)
  const[message,setMessage]=useState('')
  
const handleEdit=async(rowData)=>{
  var body={subcategoryName:subCategoryName,price:price,categoryId:categoryId}
  console.log(body)
  var response=await postData(`subcategory/${subCategoryId}/update`,body)
  if(response.status)
  {
    setMessage('Sub Category has been Edited ')
    fetchAllSubCategories()
  }
  else{
    setMessage('Fail to Edit the SubCategory')
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
      var response=await postData(`subcategory/${rowData._id}/delete`)
      if(response.status)
      { Swal.fire('Sub Category deleted Successfully', '', 'success')
       fetchAllSubCategories()
       
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
    fetchAllCategories()
    setMessage('')
  setSubCategoryId(rowData._id)
  setCategoryId(rowData.categoryId)
  setSubCategoryName(rowData.subcategoryName)
  setPrice(rowData.price)
  setOpen(true)
}





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

const editView=()=>{
  return(
    <div className={classes.editRoot} class="font-class">
        <div className={classes.editSubdiv}>
        <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div className={classes.heading}>
                     Edit Sub Category
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
                     <TextField value={subCategoryName} onChange={(event)=>setSubCategoryName(event.target.value)} label="Sub Category Name" variant="outlined" fullWidth/>
                 </Grid>
                 <Grid item xs={12}>
                     <TextField value={price} onChange={(event)=>setPrice(event.target.value)} label="Price" variant="outlined" fullWidth/>
                 </Grid>
                 

                 <Grid item xs={12}>
                     <Button variant="contained" onClick={()=>handleEdit()}  fullWidth>Edit Sub Category</Button>

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
      title={"Sub Category List"}
        data={subCategories}
        columns={[
            {
              title: "Category Id",
              field: "categoryId",
             
            },
            {
              title: "Sub Category Id",
              field: "_id",
             
            },
            {
              title: "Sub Category Name",
              field: "subcategoryName",
            },
            {
              title: "Price",
              field: "price",
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


 

    const fetchAllSubCategories=async()=>{
        const result=await getData('subcategory/displayallsubcategories')
        
        setSubCategories(result)
    }


    useEffect(function(){
       fetchAllSubCategories()

    },[])

    return(
 
      <Grid container spacing={2} style={{  display:"flex",
      justifyContent:'center',
      alignItems:'center'}}>
        <Grid item xs={12} sm={8} style={{marginTop:20,fontSize:matches?10:20}}>
      {displayTable()}</Grid>
      {openDialog()}</Grid>

    )
    
}