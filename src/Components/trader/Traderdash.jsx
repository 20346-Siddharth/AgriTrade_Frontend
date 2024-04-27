import React, { useState } from "react";

import "../admin/style/admindash.css";

import Welcometopbar from "../Welcometopbar";
import AddBill from "./components/AddBill";
import See_Purchase from "./components/See_Purchase";
import TraderHome from "./components/TraderHome";
import Tradersidebar from "./components/Tradersidebar";
import VerifyBuyer from "./components/VerifyBuyer";
import View_common_slip from "./components/View_common_slip";

const Traderdash = () => {
  const [selectedRoute, setSelectedRoute] = useState("traderhome");

  const handleRouteChange = (route) => {
    setSelectedRoute(route);
  };

  return (
    <div>
      <div className="wrapper">
        <Tradersidebar onRouteChange={handleRouteChange}/>
        <Welcometopbar />
      </div>
      <div className="allcontent">
        <div className="searchcontent">
          <div className="search">
            <input type="text" placeholder="Name..." />
            <input type="text" placeholder="Crop..." />
          </div>
          <div className="searchbutton">
            <button>
              <span>Search</span>
            </button>
          </div>
        </div>
        <div className="child_render">
        {selectedRoute === "traderhome" && <TraderHome />}
        {selectedRoute === "verifybuyer" && <VerifyBuyer />}
        {selectedRoute === "View_Common_Slip" && <View_common_slip />}
        {selectedRoute === "Addbill" && <AddBill />}
        {selectedRoute === "see_purchase" && <See_Purchase />}
        </div>
      
      </div>
    </div>
  );
};

export default Traderdash;
