import React from "react";
import "../design/landing.css";

import logomandi from "./media/logomandi.jpg";
import crop from "./media/crop.jpg";
import crop1 from "./media/crop1.jpg";
import crop2 from "./media/crop2.jpg";
import crop3 from "./media/crop3.jpg";
import crop4 from "./media/crop4.jpg";
import bajra from "./media/bajra.jpg";
import crop5 from "./media/crop5.jpg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="landingpage">
        {/* <div className="head">
          <img src={logomandi} alt="logomandi" className="headimage" />
          <img src={av} alt="av" className="headimage" />
        </div> */}
        <div className="navcontainer">
          <div className="head">
            <img src={logomandi} alt="logomandi" className="headimage" />
          </div>
          <nav>
            <ul>
             <Link to = "/"><li>Home</li></Link>
             <Link to = "/"><li>Services</li></Link>
             <Link to = "/"><li>About</li></Link>
             <Link to = "/"><li>Contact</li></Link>
              <Link to="/login">
                <li>Login</li>
              </Link>
              <Link to="/signup">
                {" "}
                <li>Sign in</li>
              </Link>
            </ul>
          </nav>
        </div>

        <section class="home">
          <div class="description">
            <h1 class="title">
              <span style={{ color: "gradient-text" }}>AgriTrade Connect</span>
            </h1>
            <p class="paragraph">
              Welcome to E-Mandi Market, your one-stop destination for all your
              agricultural needs! Whether you're a farmer, trader, or consumer,
              E-Mandi Market revolutionizes the way you buy and sell
              agricultural products.
            </p>
            <Link to="/adminlogin">
              <button type="submit" class="btn" aria-label="submit">
                <span>Sign In</span>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </button>
            </Link>
          </div>
          <div className="users-color-container">
            <span className="item" style={{ order: 1 }}></span>
            <img className="item" src={crop} style={{ order: 2 }} alt="" />
            <span className="item" style={{ order: 3 }}></span>

            <img className="item" src={crop1} style={{ order: 4 }} alt="" />

            <img className="item" src={crop4} style={{ order: 5 }} alt="" />
            <span className="item" style={{ order: 6 }}></span>
            <img className="item" src={crop3} style={{ order: 7 }} alt="" />
            <span className="item" style={{ order: 8 }}></span>

            <span className="item" style={{ order: 9 }}></span>
            <img className="item" src={crop5} style={{ order: 10 }} alt="" />
            <span className="item" style={{ order: 11 }}></span>
            <img className="item" src={bajra} style={{ order: 12 }} alt="" />
          </div>
        </section>
        <section id="about">
          <div>
            <div className="about-content">
              <div className="vertical-ruler1"></div>
              <div className="about-head">Who are we?</div>
              <div className="vertical-ruler2"></div>
              <div className="about-subhead-container">
                <div className="horizontal-ruler1"></div>
                <div className="about-subhead">E-Mandi (E-Commerce)</div>
                <div className="horizontal-ruler1"></div>
              </div>

              <div className="vertical-ruler2"></div>
              <div className="about-mid">
                Our mission keeps us focused and accountable, our vission drives
                us and our values dictate how we succeed.
                <br />
                To best understand HOW we are different, we invite you to learn
                about our story...
              </div>
              <div className="vertical-ruler1"></div>
              <div className="about-para">
                <h1>OUR STORY</h1>
                <div className="about-line"></div>
                <p>
                  Since our inception, Centpays has set out to disrupt the
                  payments industry.
                  <br /> <br />
                  Purposefully designed to ensure swift and reliable
                  transactions, offering a user-friendly experience for both
                  businesses and consumers. <br /> <br />
                  Centpays offers unprecedented service by developing secure,
                  scalable platform that adapts to your unique needs, allowing
                  you to focus on growing your business while we handle the
                  intricacies of payment processing.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="features">
          <div className="features">
            <div className="features-display-left">
              <div>
                {/* <h1>Unlock access to limitless business growth</h1> */}
                <div className="features-head">
                  Our Services <br />
                  <span>Mandi</span>
                </div>
                <p>
                  We’re more than a payments partner. Get smoother payment
                  processes and offer an outstanding experience
                </p>

                <div className="features-display-left-cards">
                  <div className="features-card">
                    <h2>Manage your money, your way</h2>
                  </div>
                  <div className="features-card">
                    <h2>Insights to power your business</h2>
                  </div>
                  <div className="features-card">
                    <h2>Single Api with multiple payment solution</h2>
                  </div>
                  <div className="features-card">
                    <h2>Total flexibility in payment modes</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="features-display-right">
              <div className="gallery-container">
                <img
                  className="item-features-display-right-container"
                  src={crop5}
                  alt="Crop 1"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="Footer">
              <div>
                <div className="Footer">
                  <div class="footer-content">
                    <div className="websiteBG-Header-logo"></div>
                    <div class="footer-section s1">
                      <h3>Company</h3>
                      <ul>
                        <li>About Us</li>
                        <li>Our Products</li>
                        <li>Contact</li>
                        <li>Application Form</li>
                      </ul>
                    </div>
                    <div class="footer-section s2">
                      <h3>Products</h3>
                      <ul>
                        <li>Credit & Debit Processing</li>
                        <li>White Label Payment Gateway</li>
                        <li>Alternative Payment Methods</li>
                        <li>Crypto Payment Processing</li>
                      </ul>
                    </div>
                    <div class="footer-section s3">
                      <h3>Terms & Policies</h3>
                      <ul>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Cookies Policy</li>
                      </ul>
                    </div>
                    <div class="footer-section s4">
                      <h3 className="h3">
                       Contact Us
                      </h3>
                      <input
                        class="formfield"
                        type="text"
                        name="Email"
                        placeholder="Enter your email id"
                      />
                      <button type="submit" class="btn-pink" id="submit-btn">
                        Send Message{" "}
                        <i className="	fas fa-angle-right"></i>
                      </button>
                    </div>
                  </div>
                
                  <div class="footer-bottom">
                  
                    <div className="line " />

                    <p>©2024 E-Mandi | All Rights Reserved «</p>
                  </div>
                </div>
              </div>
            </section>
      </div>
    </>
  );
};

export default LandingPage;
