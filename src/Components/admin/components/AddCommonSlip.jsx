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
    <div className='form_main'>
      <p className='heading'>Add Common Slip</p>
      <form onSubmit={handleSubmit}>
        <div className='inputContainer'>
          <input
            type='text'
            className='inputField' 
            name='tokenNumber'
            value={formData.tokenNumber}
            placeholder='Token'
            onChange={handleInputChange}
          />
        </div>
        <div className='inputContainer'> 
          <input
            type='text'
            className='inputField' 
            name='cropName'
            value={formData.cropName}
            placeholder='Crop Name'
            onChange={handleInputChange}
          />
        </div>
        <div className='inputContainer'> 
          <input
            type='text'
            className='inputField' 
            name='price'
            value={formData.price}
            placeholder='Price'
            onChange={handleInputChange}
          />
        </div>
        <div className='inputContainer'> 
          <input
            type='text'
            className='inputField' 
            name='estimatedWeight'
            value={formData.estimatedWeight}
            placeholder='Estimated Weight'
            onChange={handleInputChange}
          />
        </div>
        <div className='inputContainer'>
          <input
            type='text'
            className='inputField'
            name='buyerID'
            value={formData.buyerID}
            placeholder='Buyer ID'
            onChange={handleInputChange}
          />
        </div>
        <button
  type='submit'
  className='inputButton' // Change class to 'inputButton'
  disabled={submitting}
>
  {submitting ? 'Submitting...' : 'Submit'}
</button>
      </form>
    </div>
  );
};

export default AddCommonSlip;
