import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BlogInfo } from "./BlogInfo";

const SingleBlog=()=>{
    const [content,setContent]=useState({})
const params=useParams();
const getblog=async()=>{
    try{
 const detail= await axios.get(`http://localhost:5000/blog/${params.id}`)
 setContent(detail.data.data)


 console.log(detail)
    }catch(error){

    }
}
// const fill=()=>{content.map((one,i)=>{
//     console.log(one.id)
// return one
// })}

useEffect(()=>{
    getblog()
},[])

const data ={title:"sathish",desc:"desc"}
console.log(params)
console.log(content)
    return(
<div>
<BlogInfo blog={content}/>


</div>    )
}
export default SingleBlog;