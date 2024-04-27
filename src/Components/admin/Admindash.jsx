import React, { useState} from "react";

import "../admin/style/admindash.css";

import Welcometopbar from "../Welcometopbar";
import AddCommonSlip from "./components/AddCommonSlip";
import AddNewCrop from "./components/AddNewCrop";
import Adminhome from "./components/Adminhome";
import Adminsidebar from "./components/Adminsidebar";
import AllVerifiedBuyers from "./components/AllVerifedBuyers";
import ViewCommonSlips from "./components/ViewCommonSlips";
import ViewTokens from "./components/ViewTokens";

const Admindash = () => {
  const [selectedRoute, setSelectedRoute] = useState("adminhome");

  const handleRouteChange = (route) => {
    setSelectedRoute(route);
  };

  return (
    <>
      <div className="wrapper">
        <Adminsidebar onRouteChange={handleRouteChange}/>
        <Welcometopbar />
      </div>

      <div className="allcontent">
        <div className="searchcontent">
          <div className="search">
            <input type="text" placeholder="Name..." />
            {/* <input type="text" placeholder="Crop..." /> */}
          </div>
          <div className="searchbutton">
            <button>
              <span>Search</span>
            </button>
          </div>
        </div>
      
          
          {/* Render home here */} 
         <div className="child_render">
        {/*render rutes here*/}
        {selectedRoute === "adminhome" && <Adminhome />}
        {selectedRoute === "addcommonslip" && <AddCommonSlip />}
        {selectedRoute === "add_new_crop" && <AddNewCrop />}
        {selectedRoute === "view_all_common_slips" && <ViewCommonSlips />}
        {selectedRoute === "view_all_tokens" && <ViewTokens />}
        {selectedRoute === "view_all_verified_buyers" && <AllVerifiedBuyers />}
         </div>
            </div>
    </>
  );
};

export default Admindash;
