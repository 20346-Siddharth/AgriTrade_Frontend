import React, { useState } from 'react';

function ViewTokens() {
  const [activeToken, setActiveTokens] = useState([]);
  const [expireToken, setExpireTokens] = useState([]);

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
      setExpireTokens(data.expireTokens);
      console.log(data);
    });
  }

  return (
    <div>
      <button onClick={seeSlot}>See Book Slot</button>
      <div>
        <h2>Active Tokens:</h2>
        {activeToken &&activeToken.map((ele, index) => (
          <span key={index}>{ele._id}</span>
        ))}
      </div>
      <div>
        <h2>Expired Tokens:</h2>
        {expireToken && expireToken.map((ele, index) => (
          <span key={index}>{ele._id}</span>
        ))}
      </div>
    </div>
  );
}

export default ViewTokens;
