import React, { Fragment, useEffect, useState } from "react";
import "../../HomePage/HomePage.scss";
import Product1 from "assets/images/Iphone image/iphone_12/iPhone-12-white.png";
import Product2 from "assets/images/Iphone image/iphone_12/iPhone-12-blue.png";
import Product3 from "assets/images/Iphone image/iphone_12/iPhone-12-siver.png";
import Product4 from "assets/images/Iphone image/iphone_12/iPhone-12-red.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/store";
import { fetchProductFilter } from "../productSlice";
import NumberFormat from "react-number-format";
import { Link, useLocation, useParams } from "react-router-dom";
import queryString,{ParsedQuery} from 'query-string'
import { PaginationPage } from "../Pagination";

interface IFilterParams extends ParsedQuery {
  page: string,
  limit: string,
}
interface IParams  {
  page: string,
  fromPrice?:string,
  toPrice?:string,
  limit?: string,
}
function Products() {
  const [pageActive, setPageActive] = useState(1)
  const products = useSelector((state: RootState) => state.product.products);

  const {page} = useParams<IParams>()

  
  let location = useLocation()
  const dispatch = useDispatch();
  window.scrollTo(0, 0);
  useEffect(() => {
    
    const search = location.search
    const obj = queryString.parse(search)
    
    const p = obj['page'] ? obj['page'] : 1
    //const rt = obj['rating']?:0

    let objectFilter : IFilterParams = {limit:"10" , page:'0'}
    objectFilter.page=p+''
    // console.log(params)
    // if(!params.page)
    //   objectFilter.page = "1"
    // else
    //  objectFilter.page = params.page
    const ps = Number(p) 
    setPageActive(ps)
    const paramString = queryString.stringify(objectFilter)
    dispatch(fetchProductFilter(paramString))

  }, []);


  return (
    <Fragment>
      <div className="small-container">
        <div className="row row-2">
          <h2>Tất Cả Sản Phẩm</h2>
          <select>
            <option>Default Shorting</option>
            <option>Short by price</option>
            <option>Short by popularity</option>
            <option>Short by rating</option>
            <option>Short by sales</option>
          </select>
        </div>

        <div className="row">
          {products &&
            products.map((product) => (
              <Link to={`/products/detail/${product._id}`} className="col-4">
                <div key={product._id} >
                  <img src={product.colors[0].image.photo} alt="" />
                  <h4>{product.name}</h4>
                  <div className="rating">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                  <p>
                    <NumberFormat
                      value={product.priceOnSales}
                      displayType={"text"}
                      thousandSeparator={true}
                    /> ₫
                  </p>
                </div>
              </Link>
            ))}
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
            <p>32.000.000 ₫</p>
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
            <p>32.000.000 ₫</p>
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
            <p>32.000.000 ₫</p>
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
            <p>32.000.000 ₫</p>
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
            <p>32.000.000 ₫</p>
          </div>
        </div>
        <PaginationPage pageActive ={pageActive}/>
      </div>
      
    </Fragment>
  );
}

export default (Products)