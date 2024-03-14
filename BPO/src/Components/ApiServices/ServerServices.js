import axios from "axios"
export const serverURL='https://api1.buzz2web.in'
//to read all data


export const getData=async(url)=>{
  try{  
  var response= await fetch(`${serverURL}/${url}`)
  var result=await response.json()  
  return result;
  }
  catch(e)
  { console.log("Error ",e)
      return null
  }
}


//used when queries contain parameters
export const postData=async(url,body,isFile=false)=>{
  try{
      const headers={
          headers:{
              "content-type":isFile?"multipart/form-data":"application/json",
              //"authorization":localStorage.getItem("token")||null    
          }
      }
var response= await axios.post(`${serverURL}/${url}`,body,headers)
console.log(body)
var result=await response.data
console.log(result)
return (result)
  }
  catch(error)
  {
      return(false)
  }
}

  