import React, { Fragment, useEffect, useState } from "react";
import "./Order.scss";
import NumberFormat from "react-number-format";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/store";
import { setPriceShip, setScript } from "features/Cart/cartSlice";
import { fetchAllAddress } from "features/Account/accountSlice";

const Order = () => {
  const isLogin = useSelector((state: RootState) => state.account.isLogin);

  const [isCheck, setIsCheck] = useState(true);

  const priceShip = useSelector((state: RootState) => state.cart.priceShip);

  const { carts, products } = useSelector((state: RootState) => state.cart);

  const { defalutAddress } = useSelector((state: RootState) => state.account);

  const dispatch = useDispatch();

  const handleRaio = () => {
    setIsCheck(!isCheck);
    if (isCheck) dispatch(setPriceShip(100000));
    else dispatch(setPriceShip(30000));
  };

  const subTotal = () => {
    let subtotal = 0;
    if (carts.length === 0) return 0;
    if (products.length === 0) return 0;
    products.map((product, index) => {
      console.log(subtotal);
      subtotal +=
        carts[index].quantity *
        (product.priceOnSales +
          carts[index].capacityCostPlus +
          carts[index].colorCostPlus);
    });

    return subtotal;
  };
  const totalPrice = () => {
    return subTotal() + priceShip;
  };

  useEffect(() => {
    dispatch(setScript(true));
  }, []);

  if (!isLogin) return <Redirect to="/account" />;

  if(!defalutAddress) return <Redirect to="/address" />;

  return (
    <Fragment>
      <h2 style={{ marginLeft: "160px", marginBottom: "50px" }}>
        Xem Đơn Hàng
      </h2>
      <div className="small-container-payment">
        <div className="col-7">
          <div className="row-order">
            <div className="a-box-normal">
              <div className="a-box-inner">
                <div className="row-order">
                  <div className="col-2">
                    <strong>
                      Shipping Address
                      <small>
                        <div>Change</div>
                      </small>
                    </strong>
                    <div>
                      <ul className="displayUl">
                        <li>{defalutAddress.fullName}</li>
                        <li>{defalutAddress.streetAddress}</li>
                        <li>
                          {defalutAddress.city} , {defalutAddress.state}
                        </li>
                        <li>{defalutAddress.country}</li>
                        <li>
                          Phone:
                          <span> {defalutAddress.phoneNumber}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="row-order">
                      <strong>
                        Phương Thức Thanh Toán
                        <small>
                          <div>Thay đổi</div>
                        </small>
                      </strong>
                      <i className="fa fa-cc-visa" aria-hidden="true">
                        <small>Endding in 2025</small>
                      </i>
                    </div>
                    <div className="row-order">
                      <strong>
                        Billing Address
                        <small>
                          <div>Change</div>
                        </small>
                      </strong>
                      <i>
                        <small>Same as shipping address</small>
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-order">
            <div className="a-box-normal-2">
              <div className="a-box-inner">
                <h4>Estimate Delivery : 24 December , 2020</h4>
                <div className="cart-placeorder">
                  <div className="col-7">
                    {products.map((product, index) => (
                      <div className="row-order">
                        <div className="col-2-cart">
                          <img src={carts[index].photo} alt=""></img>
                        </div>
                        <div className="col-2-cart">
                          <strong>{product.name}</strong>
                          <br />
                          <span>
                            <small>
                              {" "}
                              <NumberFormat
                                value={product.priceOnSales}
                                displayType={"text"}
                                thousandSeparator={true}
                              />{" "}
                              ₫
                            </small>
                          </span>
                          <br />
                          <span>
                            <small style={{ justifyContent: "center" }}>
                              Số lượng : {carts[index].quantity}
                            </small>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="col-3">
                    <h4>Lựa Chọn Hình Thức:</h4>
                    <br />
                    <input
                      type="radio"
                      checked={isCheck}
                      onChange={(e) => handleRaio()}
                    />
                    <span>
                      <small style={{ marginLeft: "5px" }}>
                        Trong 7 ngày làm việc
                      </small>
                    </span>
                    <br />
                    <span>
                      <small style={{ marginLeft: "15px" }}>
                        30.000 ₫&nbsp;-&nbsp;Phí Chuẩn
                      </small>
                    </span>
                    <br />
                    <br />
                    <input
                      type="radio"
                      checked={!isCheck}
                      onChange={(e) => handleRaio()}
                    />
                    <span>
                      <small style={{ marginLeft: "5px" }}>
                        Trong 3 ngày làm việc
                      </small>
                    </span>
                    <br />
                    <span>
                      <small style={{ marginLeft: "15px" }}>
                        100.000 ₫&nbsp;-&nbsp;Shipping
                      </small>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="row-order">
            <div className="a-box-normal-right">
              <div className="a-box-inner">
                <h3>Đơn Hàng</h3>
                <div className="row-order">
                  <table>
                    <tr>
                      <th>Item</th>
                      <th>{carts.length}</th>
                    </tr>
                    <tr>
                      <td>Thành Tiền</td>
                      <td>
                        <NumberFormat
                          value={subTotal()}
                          displayType={"text"}
                          thousandSeparator={true}
                        />{" "}
                        ₫
                      </td>
                    </tr>
                    <tr>
                      <td>Phí Ship</td>
                      <td>
                        <NumberFormat
                          value={priceShip}
                          displayType={"text"}
                          thousandSeparator={true}
                        />{" "}
                        ₫
                      </td>
                    </tr>
                  </table>
                </div>
                <div className="total-price">
                  <table>
                    <tr>
                      <td style={{ color: "red", fontWeight: "bold" }}>
                        Tổng Tiền
                      </td>
                      <td style={{ color: "red", fontWeight: "bold" }}>
                        <NumberFormat
                          value={totalPrice()}
                          displayType={"text"}
                          thousandSeparator={true}
                        />{" "}
                        ₫
                      </td>
                    </tr>
                  </table>
                </div>
                <Link to="/payment" className="btn">
                  Đặt Hàng
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Order;
