import React, { useState} from "react";

import "../admin/style/admindash.css";

import Welcometopbar from "../Welcometopbar";
import BookToken from "./components/BookToken";
import FarmerHome from "./components/FarmerHome";
import Farmersidebar from "./components/Farmersidebar";
import ViewBills from "./components/ViewBills";
import ViewCommonSlips from "./components/ViewCommonSlips";
import ViewTokens from "./components/ViewTokens";

const Farmerdash = () => {
  const [selectedRoute, setSelectedRoute] = useState("farmerhome");

  const handleRouteChange = (route) => {
    setSelectedRoute(route);
  };

 

  return (
    <div>
      <div className="wrapper">
        <Farmersidebar onRouteChange={handleRouteChange}/>
        <Welcometopbar />
      </div>
      <div className="allcontent">
        <div className="searchcontent">
          <div className="search1">
            <input type="text" placeholder="Crop..." />
          </div>
          <div className="searchbutton1">
            <button>
              <span>Search</span>
            </button>
          </div>
        </div>

        <div className="child_render">
        {selectedRoute === "farmerhome" && <FarmerHome />}
        {selectedRoute === "booktoken" && <BookToken />}
        {selectedRoute === "view_common_slip" && <ViewCommonSlips />}
        {selectedRoute === "view_token" && <ViewTokens />}
        {selectedRoute === "view_bills" && <ViewBills />}
        </div>
      </div>
    </div>
  );
};

export default Farmerdash;
