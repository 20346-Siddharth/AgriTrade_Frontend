import React from 'react'
import { useState } from 'react';
function AddBill() {
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
    const [purchaseFormData, setPurchaseFormData] = useState({
        tokenNumber: "",
        mobileNumber: "",
        cropName: "",
        estimatedWeight: "",
        actualWeight: "",
        price: "",
       
        
      });
    
      const handlePurchaseFormChange = (e) => {
        const { id, value } = e.target;
        setPurchaseFormData({
          ...purchaseFormData,
          [id]: value,
        });
      };

      const handlePurchaseFormSubmit = async (e) => {
        e.preventDefault();
        const token = getCookie("token");
        const url = "http://localhost:4000/api/addBuyerPurchase";
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ data: purchaseFormData, token }),
        })
          .then((response) => response.json())
          .then((data) => {
            if(data.done){
              alert("Purchase Added Successfully")
            }
            else{
              alert("Error adding Purchase")
            }
            console.log(data);
            // Handle response as needed
          })
          .catch((error) => {
            console.error("Error:", error);
            // Handle error
          });
      };
  return (
    <div>
          <div className="form_main">
          <p className="heading">Add BILL</p>
            <form onSubmit={handlePurchaseFormSubmit}>
           
       
              <div className="inputContainer">
                
                  <input
                    type="text"
                    id="tokenNumber"
                    className="inputField"
                    placeholder="Token Number"
                    value={purchaseFormData.tokenNumber}
                    onChange={handlePurchaseFormChange}
                  />
                </div>
                <div className="inputContainer">
                 
                  <input
                    type="text"
                    id="mobileNumber"
                    className="inputField"
                    placeholder="Mobile Number"
                    value={purchaseFormData.mobileNumber}
                    onChange={handlePurchaseFormChange}
                  />
                </div>
                <div className="inputContainer">
              
                  <input
                    type="text"
                    id="cropName"
                    className="inputField"
                    placeholder="Crop  Name"
                    value={purchaseFormData.cropName}
                    onChange={handlePurchaseFormChange}
                  />
                </div>
                <div className="inputContainer">
                 
                  <input
                    type="text"
                    id="estimatedWeight"
                    className="inputField"
                    placeholder="Estimated Weight"
                    value={purchaseFormData.estimatedWeight}
                    onChange={handlePurchaseFormChange}
                  />
                </div>
                <div className="inputContainer">
                 
                  <input
                    type="text"
                    id="actualWeight"
                    className="inputField"
                    placeholder="Actual Weight"
                    value={purchaseFormData.actualWeight}
                    onChange={handlePurchaseFormChange}
                  />
                </div>
                <div className="inputContainer">
             
                  <input
                    type="text"
                    id="price"
                    className="inputField"
                    placeholder=" Price"
                    name="price"
                    value={purchaseFormData.price}
                    onChange={handlePurchaseFormChange}
                  />
                </div>
                
                {/* <div className="row1">
                  <button className="purchase-button">
                    <span>Submit</span>
                  </button>
                </div> */}
                   <button id="button" type="submit">Add Bill</button>
             
              </form>
           
        </div>
        </div>
  
  )
}

export default AddBill
