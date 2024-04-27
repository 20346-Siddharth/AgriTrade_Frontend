import React from 'react'

const Adminsidebar = ({ onRouteChange }) => {


  const handleButtonClick = (route) => {
    onRouteChange(route);
  };
  return (
    <>

<div className="sidebar">
        <h2>Admin</h2>
        <ul>

          <li  onClick={() => handleButtonClick("adminhome")}>
          
              <i className="fas fa-home"></i>Home
           
          </li>
          <li  onClick={() => handleButtonClick("add_new_crop")}>
          
              <i className="fas fa-home"></i>Add New Crop
           
          </li>
          <li onClick={() => handleButtonClick("addcommonslip")}>
          
              <i className="fas fa-blog"></i>Add Common Slip
           
          </li>
          <li onClick={() => handleButtonClick("view_all_common_slips")}>
           
              <i className="fas fa-rupee-sign"></i>View All Common Slips 
            
          </li>
          <li onClick={() => handleButtonClick("view_all_tokens")}>
           
              <i className="fas fa-dollar-sign"></i>View All Tokens
           
          </li>
          <li onClick={() => handleButtonClick("view_all_verified_buyers")}>
           
              <i className="fas fa-dollar-sign"></i>All verifed Buyers
           
          </li>
          
        </ul>
      </div>

    </>
  )
}

export default Adminsidebar
