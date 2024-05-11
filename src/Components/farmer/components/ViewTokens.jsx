import React, { useEffect, useState } from 'react';

function ViewTokens({searchContent}) {
  const [activeToken, setActiveTokens] = useState([]);
  const [expireToken, setExpireTokens] = useState([]);
  const [searchtokens, setSearchTokens] = useState([]);
  useEffect(() => {
    if (searchContent && searchContent.length > 0) {
      setSearchTokens(searchContent);
    } else {
      seeSlot();
    }
  }, [searchContent]);
  function getCookie(name) {
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ');
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  }

  function seeSlot() {
    const token = getCookie('token');
    const url = "http://localhost:4000/api/showTokens";
    // const dt="2024-04-12"
    fetch(url, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
    .then((response) => response.json())
    .then((data) => {
      setActiveTokens(data.activeTokens);
      console.log(activeToken)
      setExpireTokens(data.expiredTokens);
      console.log(data);
    });
  }

  return (
    <div>
      {/* <button onClick={seeSlot}>See Book Slot</button> */}
    
      <h1 className="cardh1">View Token</h1>
      <div className="card-2">
        <div className="h1-circle">
        <ul id="h1-circle-ul-1">
        {searchtokens && searchtokens.map((token, index) => (
          <li key={index}>{token.tokennumber}</li>
        ))}
      </ul>
      <div className="h1-circle">
          <h2 className="card2">All Active Tokens</h2>
          <ul id="h1-circle-ul-1">
        {activeToken && activeToken.map((ele, index) => (
          <span key={index}>{ele.tokennumber}</span>
        ))}
           </ul>
      </div>
 
      <div className="h1-circle">
          <h2 className="card3">All Expired Tokens</h2>
          <ul id="h1-circle-ul-1">
        {expireToken && expireToken.map((ele, index) => (
          <span key={index}>{ele.tokennumber}</span>
        ))}
           </ul>
      </div>
    </div>
    </div>
    </div>
    
  );
}

export default ViewTokens;
