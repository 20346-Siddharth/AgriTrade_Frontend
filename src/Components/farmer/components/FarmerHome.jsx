import React, { useEffect, useState } from 'react'

function FarmerHome({searchContent}) {
  const[tableData,setTableData]=useState([])
  useEffect(() => {
    if (searchContent && searchContent.length > 0) {
      setTableData(searchContent);
    } else {
      fetchData();
    }
  }, [searchContent]);
  
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
  return (
    
    <div>
      <div className="table4">
            <table>
              <thead>
                <tr>
                  <th>Crop </th>
                  <th>Starting Price</th>

                  <th>Closing Price</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.cropname}</td>
                    <td>{item.startingprice}</td>
                    <td>{item.closingprice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    </div>
  )
}

export default FarmerHome
