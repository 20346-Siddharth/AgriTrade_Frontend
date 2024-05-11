import React from 'react'

const Tradersidebar = ({onRouteChange}) => {
  const handleButtonClick = (route) => {
    onRouteChange(route);
  };
  return (
    <>
    
    <div className="sidebar">
          <h2>Trader</h2>
          <ul>
          <li  onClick={() => handleButtonClick("traderhome")}>
          
          <i className="fas fa-home"></i>Home
       
      </li>
          <li  onClick={() => handleButtonClick("verifybuyer")}>
          
          <i className="	fas fa-neuter"></i>Verify Buyer
       
      </li>
          <li  onClick={() => handleButtonClick("View_Common_Slip")}>
          
          <i className="	fas fa-clone"></i>View Common Slip
       
      </li>
          <li  onClick={() => handleButtonClick("Addbill")}>
          
          <i className="	fas fa-plus"></i>Add Bill
       
      </li>
          <li  onClick={() => handleButtonClick("see_purchase")}>
          
          <i className="	fas fa-folder-plus"></i>See Purchases
       
      </li>
         
          </ul>
        </div>
    
    </>
  )
}

export default Tradersidebar
