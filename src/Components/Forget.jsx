import React from 'react'
import "./admin/style/adminpage.css";
import { Link } from "react-router-dom";
import profileicon from "./media/profile icon.png";
const Forget = () => {
  return (
    <div>
         <div className="signupcontainer">
        <div className="page">
          <div className="container">
            <div className="left1">
              <img
                src={profileicon}
                alt="profile icon"
                className="profileicon"
              />
              <div className="login">Forget Password</div>
              {/* <div className="eula">Krishi-Mandi Login</div> */}
            </div>
            <div className="right1">
              <div className="form1">
                <div className="row1">
                  <div className="input-container1">
                    <label htmlFor="EmailName">Email</label>
                    <input type="Email" id="Email" />
                  </div>
                </div>
                <div className="row1">
                  <div className="input-container1">
                    <label htmlFor="Aadhar">Aadhar</label>
                    <input type="Aadhar" id="Aadhar" />
                  </div>
                </div>

                <div className="row1">
                  <Link to="/">
                    <button>
                      <span>Send</span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="bottomLine1">
                <h3>password reset email send</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Forget
