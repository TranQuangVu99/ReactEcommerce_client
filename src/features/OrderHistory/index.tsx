import { RootState } from "app/store";
import React, { Fragment, useEffect } from "react";
import NumberFormat from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { Button, Icon, Item } from "semantic-ui-react";
import "./OrderHistory.scss";
import { fetchAllOderHistory } from "./orderHistorySlice";

function OrderHistory() {
  const { orders } = useSelector((state: RootState) => state.orderHistory);

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
        <Item.Group divided>
          {orders.map((order) => (
            <Fragment>
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
              {order.products.map((product) => (
                <Item>
                  <Item.Image src={product.photo} />

                  <Item.Content>
                    <Item.Header as="a">{product.productID.name}</Item.Header>
                    <Item.Meta>
                      <span className="cinema">
                        Quantity : {product.quantity}
                      </span>
                    </Item.Meta>
                    <Item.Description>
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
                      />
                      ₫
                      <br />
                      <br />
                      {product.productID.description}
                    </Item.Description>
                    <Item.Extra>
                      <Button primary floated="right">
                        Buy again
                        <Icon className="right chevron" />
                      </Button>
                      <Button primary floated="right">
                        View detail
                        <Icon className="right chevron" />
                      </Button>
                    </Item.Extra>
                  </Item.Content>
                </Item>
              ))}
            </Fragment>
          ))}
        </Item.Group>
       
      </div>
    </div>
  );
}

export default OrderHistory;
