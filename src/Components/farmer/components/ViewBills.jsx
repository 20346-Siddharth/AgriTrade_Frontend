import React, { useEffect, useState } from 'react';

function ViewBills() {
  const [farmerSells, setFarmerSells] = useState([]);
  useEffect(()=>{
    fetchSellsData();
  },[])
  const fetchSellsData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/previousFarmerSells");
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setFarmerSells(data);
      console.log(data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <ul>
        {farmerSells.map((sell, index) => (
          <li key={index}>
          
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ViewBills
