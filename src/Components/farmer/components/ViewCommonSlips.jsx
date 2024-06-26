import React, { useState } from 'react'
import { useEffect } from 'react';
function ViewCommonSlips() {
  const[slips,setSlips]=useState([]);
  useEffect(()=>{
    Adminslip();
  },[])
  function getCookie(name) {
    const cookieString = document.cookie;
    const cookies = cookieString.split("; ");
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  }
  function Adminslip(){
    const token = getCookie('token');
            const url = "http://localhost:4000/api/getAdminSlip";
            // const dt="2024-04-12"
            fetch(url, {
                method: "GET",
                headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        
            }).then((response)=>response.json())
       .then((data) =>{
           console.log(data.slips)
           setSlips(data.slips)
       })
}
  return (
    <div>
       <h1 className="cardh1">Slip</h1>
      <div class="card-2">
   
   <div class="h1-circle">
       
      {
       slips && slips.map((slip,index)=>(<span key={index}>{slip.tokenNumber} <br /></span>)) // call card here with data passed as props
      }
    </div>
    </div>
     </div>
  )
}

export default ViewCommonSlips
