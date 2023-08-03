import React, { useEffect, useState } from "react";
import axios from "axios";
import './HomeStyle.css'

const Blogfrom=()=>{
const [Blogtitle,setBlogtitle]=useState("")
const[Blogdesc,setBlogdesc]=useState("")



 const submit =async() => {
    try {
    const response = await axios.post('http://localhost:5000/blog', {
        title: Blogtitle,
        blog_description: Blogdesc
      });
    console.log(response,"response");   
    setBlogtitle("")
    setBlogdesc("")
    alert("blog post added successsfully")
} catch (error) {
        alert(error.message || "Something went wrong")
}
  }
console.log(Blogtitle)
console.log(Blogdesc)
    return(
        <div className="Body">
            <div >
                <input type="text" placeholder="Enter Title" className="title"
                value={Blogtitle}
                onChange={(e)=>{setBlogtitle(e.target.value)}}/>
            </div>
            <div>
                <br/>
         <textarea className="textarea"value={Blogdesc} placeholder="Hi Enter Your Command" onChange={(e)=>{setBlogdesc(e.target.value)}}/>
            </div>
            <button onClick={()=>submit()} className="but">Submit</button>
        </div>
    )
}
export default Blogfrom;