import React, { useEffect, useState } from 'react'

function View_common_slip({searchContent}) {
  const[slips,setSlips]=useState([]);
  useEffect(() => {
    if (searchContent && searchContent.length > 0) {
      setSlips(searchContent);
    } else {
      Adminslip();
    }
  }, [searchContent]);
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
           console.log(data)
           setSlips(data)
       })
}

  return (
    <div>
      <h1>Slips are</h1>
      {
       slips && slips.map((slip,index)=>(<span key={index}>{slip.tokenNumber} <br /></span>)) // call card here with data passed as props
      }
    </div>
  )
}

export default View_common_slip
