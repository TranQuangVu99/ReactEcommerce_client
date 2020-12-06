import React, { Fragment, useEffect } from "react";
import "../../features/HomePage//HomePage.scss";
import { RootState } from "app/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByIds, removeItem, updateQuantity } from "./cartSlice";
import NumberFormat from "react-number-format";
import { useHistory, withRouter } from "react-router-dom";

function Carts() {
  const { products, carts } = useSelector((state: RootState) => state.cart);
  console.log(carts)
  const dispatch = useDispatch();

  useEffect(() => {
    if (carts.length > 0)
      dispatch(fetchProductsByIds(carts.map((cart) => cart.productID)));
  }, [carts]);

  const handleChangeQuantity = (id: string, value: string) => {
    const valueNumber = Number(value);
    dispatch(updateQuantity({ productID: id, quantity: valueNumber }));
  };

  function subTotal() {
    let subtotal = 0;
    if (carts.length === 0) return 0;
    if (products.length === 0) return 0;
    products.map((product, index) => {
      console.log(subtotal)
      subtotal += (carts[index].quantity) * (product.priceOnSales  + carts[index].capacityCostPlus + carts[index].colorCostPlus) ;
    });
    
    return subtotal ;
  }

  const handleRemoveItem = (id: string) => {
    console.log(id);

    dispatch(removeItem(id));
  };

  const history = useHistory()

  return (
    <Fragment>
      {/**Cart Item */}
      <div className="small-container cart-page">
        <table>
          <tr>
            <th>Sản phẩm</th>
            <th>Dung lượng</th>
            <th>Màu sắc</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
          </tr>
          {products.map((product, index) => (
            <tr key={product._id}>
              <td>
                <div className="cart-info">
                  <img src={carts[index].photo} alt="" />
                  <div>
                    <p>{product.name}</p>
                    <small>
                      Giá tiền:{" "}
                      <NumberFormat
                        value={product.priceOnSales}
                        displayType={"text"}
                        thousandSeparator={true}
                      />{" "}
                      ₫
                    </small>
                    <br />
                    <div className="btn-remove" onClick={(e) => handleRemoveItem(product._id)}>
                      Xóa
                    </div>
                  </div>
                </div>
              </td>
              <td>
                {carts[index].capacity}GB {" :"} {carts[index].capacityCostPlus} ₫
              </td>
              <td >
                <span style={{background:`${carts[index].indexColor}`}}>{carts[index].indexColor}</span>  {" :"} {carts[index].colorCostPlus} ₫
              </td>
              <td>
                <input
                  type="number"
                  value={carts[index].quantity}
                  width="auto"
                  min="1"
                  max="10"
                  onChange={(e) =>
                    handleChangeQuantity(product._id, e.target.value)
                  }
                />
              </td>
              <td>
                <NumberFormat
                  value={subTotal()}
                  displayType={"text"}
                  thousandSeparator={true}
                />{" "}
                ₫
              </td>
            </tr>
          ))}
        </table>
        <div className="total-price">
          <table>
            <tr>
              <td>Thành tiền</td>
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
              <td>Item</td>
              <td>1</td>
            </tr>
            
          </table>
        </div>
        <div className="btn-payment">
          <div className='btn' onClick={() => history.push('/order')} >Đặt Hàng</div>
        </div>
      </div>
    </Fragment>
  );
}

export default withRouter(Carts)