import React, { useEffect, useState } from 'react';

function AllVerifiedBuyers() {
  const [buyers, setBuyers] = useState([]);
  useEffect(() => {
    fetchBuyers();
  }, []); 
  async function fetchBuyers() {
    try {
      const response = await fetch("http://localhost:4000/api/allVerifiedBuyers");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setBuyers(data);
    } catch (error) {
      console.error('Error fetching buyers:', error);
    }
  }

  return (
    <div>
      <h1>Verified Buyers</h1>
      <ul>
        {buyers.map((buyer, index) => (
          <li key={index}></li>
        ))}
      </ul>
    </div>
  );
}

export default AllVerifiedBuyers
