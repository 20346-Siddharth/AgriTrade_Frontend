import React, { useState } from 'react';

const AddCommonSlip = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    tokenNumber: '',
    cropName: '',
    price: '',
    estimatedWeight: '',
    buyerID: '',
  });

  // State to manage submission status
  const [submitting, setSubmitting] = useState(false);

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Make API call using fetch or axios
      const response = await fetch('http://localhost:4000/api/addTransectionDetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
     const data= await response.json();
      // Check if API call was successful
      console.log(data)
      if(data.used ==="yes"){
        alert("token already in use")
      }
      if (data.farmer && data.farmer ==="no") {
        // Show success alert
        alert('Token Not Found');
        // Reset form data
       
      } 
      if(data.buyer ==="no"){
        // Show error alert
        alert('Buyer ID  not Registered');
      }
      if(data.done){
        setFormData({
          tokenNumber: '',
          cropName: '',
          price: '',
          estimatedWeight: '',
          buyerID: '',
        });
        alert("Added")
      }
    } catch (error) {
      console.error('Error:', error);
      // Show error alert
      alert('An error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className='child_render2'>
      <form onSubmit={handleSubmit}>
        <label >Token</label>
        <input type="text" name="tokenNumber" value={formData.tokenNumber} className="inputBox" onChange={handleInputChange} />
        <br />
        <label>Crop Name</label>
        <input type="text" name="cropName" value={formData.cropName} className="inputBox"onChange={handleInputChange} />
        <br />
        <label>Price</label>
        <input type="text" name="price" value={formData.price} className="inputBox"onChange={handleInputChange} />
        <br />
        <label>Estimated Weight</label>
        <input type="text" name="estimatedWeight" value={formData.estimatedWeight} className="inputBox"onChange={handleInputChange} />
        <br />
        <label>Buyer ID</label>
        <input type="text" name="buyerID" value={formData.buyerID} className="inputBox"onChange={handleInputChange} />
        <br />
        <input type="submit" value={submitting ? 'Submitting...' : 'Submit'} className="inputBox"disabled={submitting} />
      </form>
    </div>
  );
};

export default AddCommonSlip;

