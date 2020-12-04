/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Fragment } from "react";
import "./HomePage.scss";
import Exclusive from "assets/images/exclusive.png";
import Testimonial1 from "assets/images/user-1.png";
import Testimonial2 from "assets/images/user-2.png";
import Testimonial3 from "assets/images/user-3.png";
import LogoGodrej from "assets/images/logo-godrej.png";
import LogoCocaCola from "assets/images/logo-coca-cola.png";
import LogoPaypal from "assets/images/logo-paypal.png";
import LogoPhilips from "assets/images/logo-philips.png";
import LogoOppo from "assets/images/logo-oppo.png";
import Categories1 from "assets/images/Iphone image/iphone_12/iPhone-12-red.png";
import Categories2 from "assets/images/Iphone image/iphone_12/iPhone-12-blue.png";
import Categories3 from "assets/images/Iphone image/iphone_12/iPhone-12-siver.png";
import Product1 from "assets/images/Iphone image/iphone_12/iPhone-12-white.png";
import Product2 from "assets/images/Iphone image/iphone_12/iPhone-12-blue.png";
import Product3 from "assets/images/Iphone image/iphone_12/iPhone-12-siver.png";
import Product4 from "assets/images/Iphone image/iphone_12/iPhone-12-red.png";
import Banner from "features/Header/Banner";
import { withRouter } from "react-router-dom";
 function  HomePage() {
  return (
    <Fragment>
      <div className="header">
        <div className="container">
        <Banner/>
          </div>
        </div>
     
      {/* Feature Categories */}
      <div className="categories">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <img src={Categories1} alt="" />
            </div>
            <div className="col-3">
              <img src={Categories2} alt="" />
            </div>
            <div className="col-3">
              <img src={Categories3} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Products */}
      <div className="small-container">
        <h2 className="title">Đặc Trưng Sản Phẩm </h2>
        <div className="row">
          <div className="col-4">
            <img src={Product1} alt="" />
            <h4>IPhone 12 Pro</h4>
            <div className="rating">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
            <p>32.000.000</p>
          </div>
          <div className="col-4">
            <img src={Product2} alt="" />
            <h4>IPhone 12 Pro</h4>
            <div className="rating">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-half-o" aria-hidden="true"></i>
            </div>
            <p>32.000.000</p>
          </div>
          <div className="col-4">
            <img src={Product3} alt="" />
            <h4>IPhone 12 Pro</h4>
            <div className="rating">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
            <p>32.000.000</p>
          </div>
          <div className="col-4">
            <img src={Product4} alt="" />
            <h4>IPhone 12 Pro</h4>
            <div className="rating">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
            <p>32.000.000</p>
          </div>
        </div>
        <h2 className="title"> Sản Phẩm Mới Nhất</h2>
        <div className="row">
          <div className="col-4">
            <img src={Product1} alt="" />
            <h4>IPhone 12 Pro</h4>
            <div className="rating">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
            <p>32.000.000</p>
          </div>
          <div className="col-4">
            <img src={Product2} alt="" />
            <h4>IPhone 12 Pro</h4>
            <div className="rating">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-half-o" aria-hidden="true"></i>
            </div>
            <p>32.000.000</p>
          </div>
          <div className="col-4">
            <img src={Product3} alt="" />
            <h4>IPhone 12 Pro</h4>
            <div className="rating">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
            <p>32.000.000</p>
          </div>
          <div className="col-4">
            <img src={Product4} alt="" />
            <h4>IPhone 12 Pro</h4>
            <div className="rating">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
            <p>32.000.000</p>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <img src={Product1} alt="" />
            <h4>IPhone 12 Pro</h4>
            <div className="rating">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
            <p>32.000.000</p>
          </div>
          <div className="col-4">
            <img src={Product2} alt="" />
            <h4>IPhone 12 Pro</h4>
            <div className="rating">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-half-o" aria-hidden="true"></i>
            </div>
            <p>32.000.000</p>
          </div>
          <div className="col-4">
            <img src={Product3} alt="" />
            <h4>IPhone 12 Pro</h4>
            <div className="rating">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
            <p>32.000.000</p>
          </div>
          <div className="col-4">
            <img src={Product4} alt="" />
            <h4>IPhone 12 Pro</h4>
            <div className="rating">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
            <p>32.000.000</p>
          </div>
        </div>
      </div>
      {/* Offer */}
      <div className="offer">
        <div className="small-container">
          <div className="row">
            <div className="col-2">
              <img src={Exclusive} className="offer-img" alt="" />
            </div>
            <div className="col-2">
              <p>Exclusive Available on RedStore</p>
              <h1>Smart Band 4</h1>
              <small>
                The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3)
                AMOLED color full-touch display with adjustable brightness, so
                everything is clear as can be.
              </small>
              <a href="true" className="btn">
                {" "}
                Mua Ngay {String.fromCharCode(8594)}
              </a>
            </div>
          </div>
        </div>
      </div>
      {/**Testimonial */}
      <div className="testimonial">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis consectetur iste voluptatum harum sit vitae, explicabo
                obcaecati omnis dignissimos esse. Odit ipsam architecto
                exercitationem. Incidunt accusamus cupiditate iste quam ab.
              </p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <img src={Testimonial1} alt="" />
              <h3>Sean Parker</h3>
            </div>
            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis consectetur iste voluptatum harum sit vitae, explicabo
                obcaecati omnis dignissimos esse. Odit ipsam architecto
                exercitationem. Incidunt accusamus cupiditate iste quam ab.
              </p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <img src={Testimonial2} alt="" />
              <h3>Mike Smith</h3>
            </div>
            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis consectetur iste voluptatum harum sit vitae, explicabo
                obcaecati omnis dignissimos esse. Odit ipsam architecto
                exercitationem. Incidunt accusamus cupiditate iste quam ab.
              </p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <img src={Testimonial3} alt="" />
              <h3>Mabel Joe</h3>
            </div>
          </div>
        </div>
      </div>

      {/**Brands */}
      <div className="brands">
        <div className="small-container">
          <div className="row">
            <div className="col-5">
              <img src={LogoGodrej} alt="" />
            </div>
            <div className="col-5">
              <img src={LogoOppo} alt="" />
            </div>
            <div className="col-5">
              <img src={LogoCocaCola} alt="" />
            </div>
            <div className="col-5">
              <img src={LogoPaypal} alt="" />
            </div>
            <div className="col-5">
              <img src={LogoPhilips} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default withRouter(HomePage)