import React, { useEffect } from 'react'
import { useState } from 'react';
function VerifyBuyer() {
  useEffect(()=>{
    getVerificationStatus();
  })
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
  
  const [verified, setVerified] = useState();
  const [verifyBuyerForm, setverifyBuyerForm] = useState({
    buyerID: "",
    account: "",
    ifsc: "",
  });
  const handleverifyBuyerFormChange = (e) => {
    const { id, value } = e.target;
    setverifyBuyerForm({
      ...verifyBuyerForm,
      [id]: value,
    });
  };

  const handleverifyBuyerSubmit = async (e) => {
    e.preventDefault();
    const data = verifyBuyerForm;
    const token = getCookie("token");
    const url = "http://localhost:4000/api/verifyBuyer";
    // const dt="2024-04-12"
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ data, token }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.exist) {
          alert("ID already Exist");
        } else if (data.buyer) {
          alert("Verification Done Successfully");
          // setVerifiedUser(data.buyer);
        }
        console.log(data);
      });
  };
  function getVerificationStatus() {
    const token = getCookie("token");
    const url = "http://localhost:4000/api/verificationStatus";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.Found) {
          setVerified(data.Found)
        } else {
          // setVerifiedUser(data.buyer);
          // buyerStatus = true;
        }
        console.log(data);
        console.log("In vaiable", verified);
      });
  }
 
  return (
    <div>
      <div className="bookslots">
         {!verified  &&(
            <div className="form-column2 purchase">
              <h2>Verification Form</h2>
              <div>
                <label htmlFor="field2">Enter ID of Your Choice</label>
                <input
                  type="text"
                  name="field2"
                  id="buyerID"
                  value={verifyBuyerForm.buyerID}
                  onChange={handleverifyBuyerFormChange}
                />
                <label htmlFor="field3">Account No.</label>
                <input
                  type="text"
                  name="field3"
                  id="account"
                  value={verifyBuyerForm.account}
                  onChange={handleverifyBuyerFormChange}
                />
                <label htmlFor="field4">ifsc</label>
                <input
                  type="text"
                  name="field4"
                  id="ifsc"
                  value={verifyBuyerForm.ifsc}
                  onChange={handleverifyBuyerFormChange}
                />
                <div className="row1">
                  <button
                    className="purchase-button"
                    onClick={handleverifyBuyerSubmit}
                  >
                    <span>Submit</span>
                  </button>
                </div>
              </div>
            </div>
          )}  
          {  verified &&(
            <div>
              Already Verified
            </div>
          )

          }
          </div>
 </div>
  )
}

export default VerifyBuyer
