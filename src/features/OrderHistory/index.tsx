import { RootState } from "app/store";
import React, { useEffect } from "react";
import NumberFormat from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { Item } from "semantic-ui-react";
import "./OrderHistory.scss";
import { fetchAllOderHistory } from "./orderHistorySlice";

function OrderHistory() {
  const { orders } = useSelector((state: RootState) => state.orderHistory);

  console.log(orders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllOderHistory());
  }, []);

  return (
    <div className="container">
      <div className="small-container">
        <div className="row">
          <h1>Your Orders</h1>
        </div>
        <div className="row">
          <ul className="a-unordered-list a-nostyle a-horizontal">
            <li role="tab">
              <span className="a-list-item"></span>
            </li>
            <li className="selected" role="tab">
              <span className="a-list-item">
                <span className="item">Orders</span>
              </span>
            </li>
          </ul>
        </div>
        <div className="a-box-normal-payment">
          <div className="orderContent">
            <div className="orderContentHeader">
              <div className="row">
                <div className="col-4">
                  <div className="a-row">
                    <span className="a-size-mini a-color-secondary">
                      ORDER PLACED
                    </span>
                    <br />
                    <span className="a-size-base a-text-bold a-color-secondary">
                      May 16, 2016
                    </span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="a-row">
                    <span className="a-size-mini a-color-secondary">TOTAL</span>
                    <br />
                    <span className="a-size-base a-text-bold a-color-secondary">
                      $904.85
                    </span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="a-row">
                    <span className="a-size-mini a-color-secondary">
                      SHIP TO
                    </span>
                    <br />

                    <a className="a-size-base font-weight-bold a-link-normal">
                      username
                      <i className="far fa-chevron-down"></i>
                    </a>
                  </div>
                </div>
                <div className="col-4 text-right">
                  <div className="a-row">
                    <span className="a-size-mini a-color-secondary">
                      ORDER # 114-7570830-75444212
                    </span>
                    <br />
                    <a className="a-size-base font-weight-bold a-link-normal">
                      Order Details
                    </a>
                    &nbsp;
                    <div
                      style={{
                        display: " inline-block",
                        backgroundColor: "#ddd",
                        height: "15px",
                        width: "2px",
                        marginBottom: "-3px",
                      }}
                    ></div>
                    &nbsp;
                    <a className="a-size-base font-weight-bold a-link-normal">
                      Invoice
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="orderContentBodyAlt">
            {orders.map((order) => (
              <Item.Group>
                <div>
                  <h3
                    className="a-size-medium a-text-bold"
                    style={{
                      color: "#111 !important ",
                      fontFamily: " 'MyWebFont',Arial,sans-serif !important",
                    }}
                  >
                    Estimated Delivery - {order.estimatedDelivery}
                  </h3>
                </div>
                

                {order.products.map((product, index) => (
                  <Item>
                    <Item.Image size="tiny" src={product.photo} />
                    <Item.Content>
                      <Item.Header as="a">
                        {product.productID.name}
                      </Item.Header>
                      <Item.Meta>
                        Price :
                        <NumberFormat
                          value={
                            (product.capacityCostPlus +
                              product.colorCostPlus +
                              product.productID.priceOnSales) *
                            product.quantity
                          }
                          displayType={"text"}
                          thousandSeparator={true}
                        />{" "}
                        ₫
                      </Item.Meta>
                      <Item.Description>
                        Quantity : {product.quantity}
                      </Item.Description>
                      <Item.Extra>
                        Lasted Product
                        <br />
                        <div className="a-row">
                          <span className="a-button-buy-again">
                            Buy it again
                          </span>
                          <span className="a-button-view-item">
                            View your item
                          </span>
                        </div>
                      </Item.Extra>
                    </Item.Content>
                  </Item>
                ))}
              </Item.Group>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
