import React, { useEffect, useState } from 'react'

function See_Purchase() {
   const[purchase,setPurchase]=useState([]);

   useEffect(()=>{
    seeMyPurchase();
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
  function seeMyPurchase(){
    const token = getCookie('token');
    const url = "http://localhost:4000/api/seeMyPurchases";
    // const dt="2024-04-12"
    fetch(url, {
        method: "GET",
        headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
},

    }).then((response)=>response.json())
.then((data) =>{
   console.log(data) // store in state variable 
   setPurchase(data.seeMyPurchase)
})
}
  return (
    <div>
      See purchase

      {
       purchase && purchase.map((purchase,index)=>(<span key={index}>{purchase._id} <br /></span>)) // call card here with data passed as props
      }
    </div>
  )
}

export default See_Purchase
