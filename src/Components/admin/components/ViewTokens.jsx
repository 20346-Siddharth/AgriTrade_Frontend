import React, { useEffect, useState } from 'react';

function ViewTokens({searchContent}) {
  const [activatetokens, setActivateTokens] = useState([]);
  const [expiredtokens, setExpiredTokens] = useState([]);
  const [searchtokens, setSearchTokens] = useState([]);
  useEffect(() => {
    if (searchContent && searchContent.length > 0) {
      setSearchTokens(searchContent);
    } else {
      fetchTokens();
    }
  }, [searchContent]);
  const fetchTokens = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/seeAllTokens');
      if (!response.ok) {
        throw new Error('Failed to fetch tokens');
      }
      const data = await response.json();
      console.log(data)
      setActivateTokens(data.activeTokens);
      setExpiredTokens(data.expiredTokens);
    } catch (error) {
      console.error('Error fetching tokens:', error);
      // Handle error, e.g., show a message to the user or retry the request
    }
  };
  return (
    <div>
      <ul>
        {searchtokens && searchtokens.map((token, index) => (
          <li key={index}>{token.tokennumber}</li>
        ))}
      </ul>
     <h1>All Active Tokens</h1>
      <ul>
        {activatetokens && activatetokens.map((token, index) => (
          <li key={index}>{token.tokennumber}</li>
        ))}
      </ul>
      <br />
     <h1>All Expired Tokens</h1>
      <ul>
        {expiredtokens && expiredtokens.map((token, index) => (
          <li key={index}>{token.tokennumber}</li>
        ))}
      </ul>
    </div>
  )
}

export default ViewTokens
