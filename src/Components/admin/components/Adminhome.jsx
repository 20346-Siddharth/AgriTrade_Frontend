import React, { useState, useEffect } from 'react';
import '../style/admindash.css';
import '../style/adminpage.css';

function Adminhome({searchContent}) {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (searchContent && searchContent.length > 0) {
      setTableData(searchContent);
    } else {
      fetchData();
    }
  }, [searchContent]);

  async function saveChanges(cropId, updatedCrop) {
    try {
      const response = await fetch('http://localhost:4000/api/updateCropPrice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCrop),
      });

      if (response.ok) {
        console.log('Crop price updated successfully');
        alert('Crop price updated successfully');
      } else {
        console.log('Something went wrong while updating crop price');
      }
    } catch (err) {
      console.error('Error updating crop price:', err);
    }
  }

  async function deleteChanges(cropId, deleteCrop) {
    try {
      const response = await fetch('http://localhost:4000/api/deletecrop', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cropId }),
      });

      if (response.ok) {
        console.log('Crop deleted successfully');
        alert('Crop deleted successfully');
        // Fetch data again after deletion
        fetchData();
      } else {
        console.log('Something went wrong while deleting crop');
      }
    } catch (err) {
      console.error('Error deleting crop:', err);
    }
  }

  const fetchData = () => {
    fetch('http://localhost:4000/api/getAllCrops')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTableData(data.crops);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleEdit = (index, field, value) => {
    const newData = [...tableData];
    newData[index][field] = value;
    setTableData(newData);
  };
  // setTableData(searchContent)
  return (
    <div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Crop Name</th>
              <th>Starting Price</th>
              <th>Closing Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tableData && tableData.map((crop, index) => (
              <tr key={crop._id}>
                <td>
                  <span
                    contentEditable
                    onBlur={(e) => handleEdit(index, 'cropname', e.target.innerText)}
                    dangerouslySetInnerHTML={{ __html: crop.cropname }}
                  />
                </td>
                <td>
                  <span
                    contentEditable
                    onBlur={(e) => handleEdit(index, 'startingprice', e.target.innerText)}
                    dangerouslySetInnerHTML={{ __html: crop.startingprice }}
                  />
                </td>
                <td>
                  <span
                    contentEditable
                    onBlur={(e) => handleEdit(index, 'closingprice', e.target.innerText)}
                    dangerouslySetInnerHTML={{ __html: crop.closingprice }}
                  />
                </td>
                <td>
                  <button onClick={() => saveChanges(crop._id, tableData[index])}>Save</button>
                </td>
                <td>
                  <button onClick={() => deleteChanges(crop._id, tableData[index])}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Adminhome;
