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
        <h1>All Transactions</h1>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>{transaction._id}</li>
        ))}
      </ul>
    </div>
  )
}

export default ViewCommonSlips
