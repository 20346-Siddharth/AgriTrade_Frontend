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
        body: JSON.stringify({ cropname:cropName, startingprice:startingPrice, closingprice:closingPrice }),
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
    <div>
    <h2>Add Crop</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Crop Name:
        <input
          type="text"
          value={cropName}
          onChange={(e) => setCropName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Starting Price:
        <input
          type="number"
          value={startingPrice}
          onChange={(e) => setStartingPrice(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Closing Price:
        <input
          type="number"
          value={closingPrice}
          onChange={(e) => setClosingPrice(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Add Crop</button>
    </form>
  </div>
  )
}

export default AddNewCrop
