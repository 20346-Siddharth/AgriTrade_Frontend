import React, { useState } from 'react';

function AddNewCrop() {
  const [cropName, setCropName] = useState('');
  const [startingPrice, setStartingPrice] = useState('');
  const [closingPrice, setClosingPrice] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/addcrop", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cropname: cropName, startingprice: startingPrice, closingprice: closingPrice }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Reset form fields after successful submission
      setCropName('');
      setStartingPrice('');
      setClosingPrice('');

      alert('Crop added successfully!');
    } catch (error) {
      console.error('Error adding crop:', error);
      alert('Error adding crop. Please try again.');
    }
  };

  return (
  //   <div className="searchcontent">
  //   <div className="search">
  //     <input type="text" placeholder="Name..." />
  //     <input type="text" placeholder="Crop..." />
  //   </div>
  //   <div className="searchbutton">
  //     <button>
  //       <span>Search</span>
  //     </button>
  //   </div>
  // </div>
  // </div>

    <div className="form_main">
      <p className="heading">Add Crop</p>
      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <input
            type="text"
            className="inputField"
            id="cropName"
            placeholder="Crop Name"
            value={cropName}
            onChange={(e) => setCropName(e.target.value)}
            required
          />
        </div>
        <div className="inputContainer">
          <input
            type="number"
            className="inputField"
            id="startingPrice"
            placeholder="Starting Price"
            value={startingPrice}
            onChange={(e) => setStartingPrice(e.target.value)}
            required
          />
        </div>
        <div className="inputContainer">
          <input
            type="number"
            className="inputField"
            id="closingPrice"
            placeholder="Closing Price"
            value={closingPrice}
            onChange={(e) => setClosingPrice(e.target.value)}
            required
          />
        </div>
        <button id="button" type="submit">Add Crop</button>
      </form>
     
    </div>
  );
}

export default AddNewCrop;
