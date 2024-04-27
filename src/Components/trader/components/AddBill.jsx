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
        buyerID:"",
        
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
      <div className="bookslot">
            <div className="form-column2 purchase">
            <form onSubmit={handlePurchaseFormSubmit}>
              <h2>Purchase Form</h2>
              <div>
                <div>
                  <label htmlFor="tokenNumber">Token Number</label>
                  <input
                    type="text"
                    id="tokenNumber"
                    name="tokenNumber"
                    value={purchaseFormData.tokenNumber}
                    onChange={handlePurchaseFormChange}
                  />
                </div>
                <div>
                  <label htmlFor="mobileNumber">Mobile Number</label>
                  <input
                    type="text"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={purchaseFormData.mobileNumber}
                    onChange={handlePurchaseFormChange}
                  />
                </div>
                <div>
                  <label htmlFor="cropName">Crop Name</label>
                  <input
                    type="text"
                    id="cropName"
                    name="cropName"
                    value={purchaseFormData.cropName}
                    onChange={handlePurchaseFormChange}
                  />
                </div>
                <div>
                  <label htmlFor="estimatedWeight">Estimated Weight</label>
                  <input
                    type="text"
                    id="estimatedWeight"
                    name="estimatedWeight"
                    value={purchaseFormData.estimatedWeight}
                    onChange={handlePurchaseFormChange}
                  />
                </div>
                <div>
                  <label htmlFor="actualWeight">Actual Weight</label>
                  <input
                    type="text"
                    id="actualWeight"
                    name="actualWeight"
                    value={purchaseFormData.actualWeight}
                    onChange={handlePurchaseFormChange}
                  />
                </div>
                <div>
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    value={purchaseFormData.price}
                    onChange={handlePurchaseFormChange}
                  />
                </div>
                <div>
                  <label htmlFor="totalAmount">Total Amount</label>
                  <input
                    type="text"
                    id="totalAmount"
                    name="totalAmount"
                    value={purchaseFormData.totalAmount}
                    onChange={handlePurchaseFormChange}
                  />
                </div>
                <div className="row1">
                  <button className="purchase-button">
                    <span>Submit</span>
                  </button>
                </div>
              </div>
              </form>
            </div>
          </div>
    </div>
  )
}

export default AddBill
