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
          
              <i className="	fas fa-plus"></i>Add New Crop
           
          </li>
          <li onClick={() => handleButtonClick("addcommonslip")}>
          
              <i className="far fa-plus-square"></i>Add Common Slip
           
          </li>
          <li onClick={() => handleButtonClick("view_all_common_slips")}>
           
              <i className="fas fa-list-alt"></i>View Common Slips 
            
          </li>
          <li onClick={() => handleButtonClick("view_all_tokens")}>
           
              <i className="fas fa-list-ol"></i>View All Tokens
           
          </li>
          <li onClick={() => handleButtonClick("view_all_verified_buyers")}>
           
              <i className="	fas fa-portrait"></i>All verifed Buyers
           
          </li>
          
        </ul>
      </div>

    </>
  )
}

export default Adminsidebar
