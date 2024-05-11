import React, { useEffect, useState } from 'react';
import ShowTokens from './ShowTokens';

function ViewTokens({ searchContent }) {
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
      console.log(data);
      setActivateTokens(data.activeTokens);
      setExpiredTokens(data.expiredTokens);
    } catch (error) {
      console.error('Error fetching tokens:', error);
      // Handle error, e.g., show a message to the user or retry the request
    }
  };

  return (
    <div>
      <h1 className="cardh1">View Token</h1>
      <div className="card-2">
        <div className="h1-circle">
          {/* <h2 className="card2">Searched Tokens</h2> */}
          <ul id="h1-circle-ul-1">
            {searchtokens.map((token, index) => (
              <li key={index}><ShowTokens token={token}/></li>
            ))}
          </ul>
        </div>
        <div className="h1-circle">
          <h2 className="card2">All Active Tokens</h2>
          <ul id="h1-circle-ul-1">
            {activatetokens.map((token, index) => (
              <li key={index}><ShowTokens token={token}/></li>
            ))}
          </ul>
        </div>
        <div className="h1-circle">
          <h2 className="card3">All Expired Tokens</h2>
          <ul id="h1-circle-ul-1">
            {expiredtokens.map((token, index) => (
              <li key={index}>{token.tokennumber}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ViewTokens;
