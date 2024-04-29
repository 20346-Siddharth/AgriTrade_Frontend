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
  function getCookie(name) {
    const cookieString = document.cookie;
    const cookies = cookieString.split("; ");
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  }
  const [selectedRoute, setSelectedRoute] = useState("traderhome");

  const [searchValue, setSearchValue] = useState("");
  const [searchContent, setSearchContent] = useState([]);

  const handleRouteChange = (route) => {
    setSelectedRoute(route);
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    searchHandle(e.target.value); // Call searchHandle with the updated value
  };

  const searchHandle = (value) => {
    if (value === "") {
      setSearchContent([]);
      return;
    }
    const token = getCookie("token");
    const requestData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ crop: value }),
    };

    fetch(`http://localhost:4000/api/${selectedRoute}`, requestData)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("API response:", data);
        if (data.crops.length > 0) setSearchContent(data.crops);
        else {
          setSearchContent([]);
          alert("No items matched");
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
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
            <input
              type="text"
              placeholder="Name..."
              onChange={handleInputChange}
              value={searchValue}
            />
          </div>
        </div>
        <div className="child_render">
        {selectedRoute === "traderhome" && <TraderHome searchContent={searchContent}/>}
        {selectedRoute === "verifybuyer" && <VerifyBuyer />}
        {selectedRoute === "View_Common_Slip" && <View_common_slip searchContent={searchContent}/>}
        {selectedRoute === "Addbill" && <AddBill />}
        {selectedRoute === "see_purchase" && <See_Purchase searchContent={searchContent} />}
        </div>
      
      </div>
    </div>
  );
};

export default Traderdash;
