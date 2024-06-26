import React, { useEffect, useState } from 'react'

function See_Purchase({searchContent}) {
   const[purchase,setPurchase]=useState([]);

   useEffect(() => {
    if (searchContent && searchContent.length > 0) {
      setPurchase(searchContent);
    } else {
      seeMyPurchase();
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
     <h1 className="cardh1">See Purchase</h1>
    <div class="card-2">
   
        <div class="h1-circle">
            

      {
       purchase && purchase.map((purchase,index)=>(<span key={index}>{purchase.tokenNumber} <br /></span>)) // call card here with data passed as props
      }
    </div>
    </div>
     </div>
  )
}

export default See_Purchase
