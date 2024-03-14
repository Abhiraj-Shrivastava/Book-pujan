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


export default function DisplayAllUsers(props){  

  var theme =useTheme()
  const classes=useStyles()   
  const matches=useMediaQuery(theme.breakpoints.down(700))
  const[users,setUsers]=useState([])
  const[categoryId,setCategoryId]=useState('')
  const[subCategoryId,setSubCategoryId]=useState('')
  const[subCategoryName,setSubCategoryName]=useState('')
  const[categories , setCategories]=useState([])
  const[price , setPrice]=useState([])
  const[open,setOpen]=useState(false)
  const[message,setMessage]=useState('')
  




// const handleDelete=async(rowData)=>{
  
//   Swal.fire({
//     title: 'Do you want to delete the selected record?',
//     showDenyButton: true,
//     showCancelButton: true,
//     confirmButtonText: 'Delete',
//     denyButtonText: `Don't Delete`,
//   }).then(async(result) => {
//     /* Read more about isConfirmed, isDenied below */
    
//     if (result.isConfirmed) {
//       var body={id:rowData._id}
//       var response=await postData(`subcategory/${rowData._id}/delete`)
//       if(response.status)
//       { Swal.fire('Sub Category deleted Successfully', '', 'success')
//        fetchAllSubCategories()
       
//       }
//       else{
//         Swal.fire('Server Error', '', 'error')
//       }
     
//     } else if (result.isDenied) {
//       Swal.fire('Your Record is Safe', '', 'info')
//     }
//   })

  


// }  





function displayTable() {
    return (
      <MaterialTable
      title={"Users List"}
        data={users}

        columns={[
            {
              title: "User Id",
              field: "_id",
             
            },
            {
              title: "User Name",
              field: "name",
            },
            {
              title: "Phone Number",
              field: "phonenumber",
            },
           
            {
              title: "Street 1",
              field: "street1",
            },
            {
              title: "City",
              field: "city",
            },
            {
              title: "State",
              field: "state",
            },
            {
              title: "Pincode",
              field: "pincode",
            },
            
           
        ]}
        // actions={[
         
        //   {
        //     icon: () => <DeleteIcon />,
        //     tooltip: "Delete State",
        //     onClick: (event, rowData) => {
        //       const rowJson = JSON.stringify(rowData, null, 2);
        //      handleDelete(rowData)
              
        //     },
        //   },
        // ]}
       
      />
    );
  }





 

    const fetchAllUsers=async()=>{
        const result=await getData('users/displayallusers')
        
        setUsers(result.reverse())
    }


    useEffect(function(){
       fetchAllUsers()

    },[])

    return(
      <Grid container spacing={2} style={{  display:"flex",
      justifyContent:'center',
      alignItems:'center'}}>
        <Grid item xs={12} sm={8} style={{marginTop:20,fontSize:matches?10:20}}>
      {displayTable()}</Grid></Grid>

    )
    
}