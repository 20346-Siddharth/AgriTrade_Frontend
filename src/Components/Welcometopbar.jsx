import React, { useEffect, useState } from 'react';
import "./admin/style/admindash.css";
import Profile from "./Profile";
import "./media/profile icon.png"
import { Link, useNavigate } from "react-router-dom";
import profileicon from "./media/profile icon.png";
const Welcometopbar = () => {
  const[user,setUser]=useState({})
    useEffect(()=>{
     profile();
    },[])
    function profile(){
      const token = getCookie('token');
      const url = "http://localhost:4000/api/profile";
      fetch(url, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({ token: token })
      }).then((response) => response.json())
      .then((data) => {
          setUser(data);
          console.log("USer Infp"+data);
          console.log(user);
      }).catch((error) => {
          console.error('Error:', error);
      });
  }
  
 
  const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(true);
      };
    
      const closeModal = () => {
        setShowModal(false);
      };
     
      

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

      function deleteCookie(name) {
        document.cookie =
          name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      }

      const navigate = useNavigate();
      const Logout = () => {
        const token = getCookie("token");
        console.log(token);
        const url = "http://localhost:4000/api/logout";
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ token: token }),
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle response as needed
            if (data.logout) {
              deleteCookie("token");
              // window.location.href='./login.html'
              navigate("/login");
            }
            console.log(data);
          })
          .catch((error) => {
            console.error("Logout error:", error);
            // Handle logout error
          });
      };

  return (
    <>

<div className="main_content">
          <div className="header">
            Welcome!! {user.username} .
            <div className="icon">
              <i className="fa fa-bell icon"></i>
              <Link to="/adminlogin">
                {" "}
                <i className="fas fa-sign-in-alt" onClick={Logout}></i>
              </Link>
              {/* Profile button */}
              <div className="modal">
                <img
                  src={profileicon}
                  alt="profile icon"
                  className="profileiconmodal"
                  onClick={openModal}
                />
              </div>
            </div>
          </div>

          {/* Profile*/}
          {showModal && (
            <div className="modal-overlay" onClick={closeModal}>
              <div className="modal">
                <span className="modalclose">&times;</span>
                <Profile user={user}/>
              </div>
            </div>
          )}
        </div>
      
      
    </>
  )
}

export default Welcometopbar
