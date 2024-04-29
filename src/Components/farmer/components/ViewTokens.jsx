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
      <div>
      <ul>
        {searchtokens && searchtokens.map((token, index) => (
          <li key={index}>{token.tokennumber}</li>
        ))}
      </ul>
        <h2>Active Tokens:</h2>
        {activeToken && activeToken.map((ele, index) => (
          <span key={index}>{ele.tokennumber}</span>
        ))}
      </div>
      <div>
        <h2>Expired Tokens:</h2>
        {expireToken && expireToken.map((ele, index) => (
          <span key={index}>{ele.tokennumber}</span>
        ))}
      </div>
    </div>
  );
}

export default ViewTokens;
