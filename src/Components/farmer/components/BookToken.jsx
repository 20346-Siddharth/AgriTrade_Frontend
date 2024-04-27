import React, { useState } from 'react';

function BookToken() {
  const [date, setDate] = useState("");

  function handleDate(event) {
    const dt = event.target.value;
    setDate(dt);
  }

  function bookSlot() {
    const token = getCookie('token');
    const url = "http://localhost:4000/api/getToken";
    const dt = "";
    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ token: token, Date: dt }),
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert(data);
      });
  }

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

  return (
    <div>
      <button onClick={bookSlot}>Book Slot</button>
      <label htmlFor="date">
        Date
      </label>
      <input type="date" onChange={handleDate} />
    </div>
  );
}

export default BookToken;
