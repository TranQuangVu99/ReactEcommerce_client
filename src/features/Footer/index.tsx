import React, { Fragment } from "react";
import "features/HomePage/HomePage.scss";
import PlayStore from "assets/images/play-store.png";
import AppStore from "assets/images/app-store.png";
import LogoWhite from "assets/images/logo-white.png";
import { withRouter } from "react-router-dom";
function Footer() {
  return (
    <Fragment>
      {/**Footer */}
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col-1">
              <h3>Download Our App</h3>
              <p> Download App for Android and iOS mobile phone</p>
              <div className="app-logo">
                <img src={PlayStore} alt="" />
                <img src={AppStore} alt="" />
              </div>
            </div>
            <div className="footer-col-2">
              <img src={LogoWhite} alt="" />
              <p>
                {" "}
                Our Purpose Is To Sustainably Make the Pleasure and Benefits of
                Iphone to the Many .
              </p>
            </div>
            <div className="footer-col-3">
              <h3>Useful Links</h3>
              <ul>
                <li>Coupons</li>
                <li>Blog Post</li>
                <li>Return Policy</li>
                <li>Join</li>
              </ul>
            </div>
            <div className="footer-col-4">
              <h3>Follow us</h3>
              <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
          <hr></hr>
          <p className="copyright"> Copyright 2020 - RedStore</p>
        </div>
      </div>
    </Fragment>
  );
}

export default withRouter(Footer)
