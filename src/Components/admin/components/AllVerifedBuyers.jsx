import React, { useEffect, useState } from "react";

function AllVerifiedBuyers({ searchContent }) {
  const [buyers, setBuyers] = useState([]);
  useEffect(() => {
    if (searchContent && searchContent.length > 0) {
      setBuyers(searchContent);
    } else {
      fetchBuyers();
    }
  }, [searchContent]);
  async function fetchBuyers() {
    try {
      const response = await fetch(
        "http://localhost:4000/api/allVerifiedBuyers"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setBuyers(data.buyers);
    } catch (error) {
      console.error("Error fetching buyers:", error);
    }
  }

  return (
    <div>
      <h1 className="cardh1">Verified Buyers</h1>
      <div class="card-2">
        <div class="h1-circle">
          <ul id="h1-circle-ul-1">
            {buyers.map((buyer, index) => (
              <li key={index}>{buyer.buyerID}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AllVerifiedBuyers;
