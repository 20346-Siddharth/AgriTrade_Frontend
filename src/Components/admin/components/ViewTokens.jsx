import React, { useEffect, useState } from 'react';

function ViewTokens() {
  const [activatetokens, setActivateTokens] = useState([]);
  const [expiredtokens, setExpiredTokens] = useState([]);
   useEffect(()=>{
    fetchTokens();
   },[])
  const fetchTokens = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/seeAllTokens');
      if (!response.ok) {
        throw new Error('Failed to fetch tokens');
      }
      const data = await response.json();
      setActivateTokens(data.activeTokens);
      setExpiredTokens(data.expiredTokens)
    } catch (error) {
      console.error('Error fetching tokens:', error);
    }
  };
  return (
    <div>
     <h1>All Active Tokens</h1>
      <ul>
        {activatetokens.map((token, index) => (
          <li key={index}>{token.tokenNumber}</li>
        ))}
      </ul>
      <br />
     <h1>All Expired Tokens</h1>
      <ul>
        {expiredtokens.map((token, index) => (
          <li key={index}>{token.tokenNumber}</li>
        ))}
      </ul>
    </div>
  )
}

export default ViewTokens
