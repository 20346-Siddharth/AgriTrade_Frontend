import React, { useEffect, useState } from 'react';

function ViewCommonSlips() {
  const [transactions, setTransactions] = useState([]);
  useEffect(()=>{
    fetchData();
  },[])
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/seeAllTransections');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <div>
        <h1>All Transactions</h1>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>{/* Render each transaction item here */}</li>
        ))}
      </ul>
    </div>
  )
}

export default ViewCommonSlips
