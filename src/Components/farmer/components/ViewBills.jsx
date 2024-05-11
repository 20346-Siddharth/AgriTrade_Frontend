import React, { useEffect, useState } from 'react';

function ViewBills({searchContent}) {
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
  const [farmerSells, setFarmerSells] = useState([]);
  useEffect(() => {
    if (searchContent && searchContent.length > 0) {
      setFarmerSells(searchContent);
    } else {
      fetchSellsData();
    }
  }, [searchContent]);
  const fetchSellsData = async () => {
    try {
      const token = getCookie("token"); // Assuming you have a function to get the token from cookies
      const requestData = {
        method: "GET", // Assuming you are making a GET request
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
  
      const response = await fetch("http://localhost:4000/api/previousFarmerSells", requestData);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setFarmerSells(data.previousFarmerSells);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  return (
    <div>
       <h1 className="cardh1">Bills Views</h1>
    <div class="card-2">
   
        <div class="h1-circle">
            
        <ul id="h1-circle-ul-1">
        {farmerSells.map((sell, index) => (
          <li key={index}>
             {sell.tokenNumber}
          </li>
        ))}
      </ul>
    </div>
    </div>
     </div>
  )
}

export default ViewBills
