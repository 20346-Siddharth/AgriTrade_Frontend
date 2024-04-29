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
        <Farmersidebar onRouteChange={handleRouteChange}/>
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
        {selectedRoute === "farmerhome" && <FarmerHome searchContent={searchContent} />}
        {selectedRoute === "booktoken" && <BookToken />}
        {selectedRoute === "view_common_slip" && <ViewCommonSlips />}
        {selectedRoute === "view_token" && <ViewTokens  searchContent={searchContent}/>}
        {selectedRoute === "view_bills" && <ViewBills searchContent={searchContent} />}
        </div>
      </div>
    </div>
  );
};

export default Farmerdash;
