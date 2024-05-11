import React, { useState } from 'react'

const Farmersidebar = ({ onRouteChange }) => {
  const handleButtonClick = (route) => {
    onRouteChange(route);
  };
  return (
    <>
    
    <div className="sidebar">
          <h2>Farmer</h2>
          <ul>
          <li  onClick={() => handleButtonClick("farmerhome")}>
          
          <i className="fas fa-home"></i>Home
       
      </li>
          <li  onClick={() => handleButtonClick("booktoken")}>
          
          <i className="	fas fa-clone"></i>Book Token
       
      </li>
          <li  onClick={() => handleButtonClick("view_common_slip")}>
          
          <i className="fas fa-list-alt"></i>Common Slips
       
      </li>
          <li  onClick={() => handleButtonClick("view_bills")}>
          
          <i className="fas fa-clone"></i>Bills
       
      </li>
          <li  onClick={() => handleButtonClick("view_token")}>
          
          <i className="fas fa-list-ol"></i>Previous Tokens
       
      </li>
           
          </ul>
        </div>

    </>
  )
}

export default Farmersidebar
