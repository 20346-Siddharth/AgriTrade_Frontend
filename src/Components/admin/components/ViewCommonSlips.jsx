import React, { useEffect, useState } from 'react';

function ViewCommonSlips({searchContent}) {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    if (searchContent && searchContent.length > 0) {
      setTransactions(searchContent);
    } else {
      fetchData();
    }
  }, [searchContent]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/seeAllTransections');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data)
      setTransactions(data.allTransections);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <div>
    
        <h1 className="cardh1">All Transactions</h1>
        <div class="card-2">
   
   <div class="h1-circle">
       
   <ul id="h1-circle-ul-1">
        {transactions.map((transaction, index) => (
          <li key={index}>{transaction._id}</li>
        ))}
      </ul>
    </div>
    </div>
    </div>
  )
}

export default ViewCommonSlips
