import React, { useState, useEffect } from "react";
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

    const requestData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
    <>
      <div className="wrapper">
        <Adminsidebar onRouteChange={handleRouteChange} />
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
          {selectedRoute === "adminhome" && <Adminhome searchContent={searchContent} />}
          {selectedRoute === "addcommonslip" && <AddCommonSlip />}
          {selectedRoute === "add_new_crop" && <AddNewCrop />}
          {selectedRoute === "view_all_common_slips" && <ViewCommonSlips searchContent={searchContent}/>}
          {selectedRoute === "view_all_tokens" && <ViewTokens searchContent={searchContent} />}
          {selectedRoute === "view_all_verified_buyers" && <AllVerifiedBuyers searchContent={searchContent}/>}
        </div>
      </div>
    </>
  );
};

export default Admindash;
