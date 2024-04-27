import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profileicon from "./media/profile icon.png";

const Login = () => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
    const navigate =useNavigate();
  const handleLogin = () => {
    const url = "http://localhost:4000/api/login";
    const data = {
        mobile,
        password,
    };
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if(data.success===true){
                console.log(data.user)
                document.cookie = `token=${data.token};  path=/`;

                if(data.user.category === "farmer")
                navigate("/farmerdash")
                else if(data.user.category === "buyer")
                navigate("/traderdash")
                else if(data.user.category === "admin")
                navigate("/admindash")
                else alert("User Category not found")
            } 
        })
        .catch((error) => console.error(error));

  };

  return (
    <div>
      <div className="signupcontainer">
        <div className="page">
          <div className="container">
            <div className="left1">
              <img src={profileicon} alt="profile icon" className="profileicon" />
              <div className="login">Login</div>
              <div className="eula">Krishi-Mandi Login</div>
            </div>
            <div className="right1">
              <div className="form1">
                <div className="row1">
                  <div className="input-container1">
                    <label htmlFor="Name">Mobile Number</label>
                    <input type="text" id="Name" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                  </div>
                </div>

                <div className="row1">
                  <div className="input-container1">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </div>
                <div className="row1">
                  <button onClick={handleLogin}>
                    <span>Submit</span>
                  </button>
                </div>
              </div>
              <div className="bottomLine1">
                <h3>Click to <Link to="/forget"> Forget Password</Link> </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
