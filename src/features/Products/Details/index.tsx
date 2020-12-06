import React, { Fragment, useEffect, useState } from "react";
import "../../HomePage/HomePage.scss";
import Product1 from "assets/images/Iphone image/iphone_12/iPhone-12-white.png";
import Product2 from "assets/images/Iphone image/iphone_12/iPhone-12-blue.png";
import Product3 from "assets/images/Iphone image/iphone_12/iPhone-12-siver.png";
import Product4 from "assets/images/Iphone image/iphone_12/iPhone-12-red.png";
import { useParams } from "react-router-dom";
import productApi from "app/api/product";
import { IProductDetail } from "app/models/product";
import { useDispatch } from "react-redux";
import { addNewItemCart } from "features/Cart/cartSlice";
import NumberFormat from "react-number-format";
import CommentPage from "features/Comment";
import { ICartItem } from "features/Cart/types/cartItem";
import { Card, Header, Table } from "semantic-ui-react";
import { messageSuccess } from "app/notification/message";

interface IParams {
  productID: string;
}

const ProductItem: React.FC = () => {
  const { productID } = useParams<IParams>();

  const [productData, setProductData] = useState<IProductDetail>();

  const [isLoad, setIsLoad] = useState<Boolean>(true);

  const [state, setState] = useState<ICartItem>({
    capacity: 0,
    capacityCostPlus: 0,
    indexColor: "",
    colorCostPlus: 0,
    productID: "",
    quantity: 1,
    photo: "",
    colorName: "",
  });

  const handleChangeColor = (
    name: string,
    indexColor: string,
    cost: number,
    photo: string
  ) => {
    setState({
      ...state,
      colorName: name,
      indexColor: indexColor,
      colorCostPlus: cost,
      photo: photo,
    });
  };

  const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setState({ ...state, quantity: value });
  };

  const handleChangeCapacity = (name: number, cost: number) => {
    setState({ ...state, capacity: name, capacityCostPlus: cost });
  };

  const subTotal = () => {
    let subtotal = 0;
    subtotal +=
      (productData?.priceOnSales! +
        state.capacityCostPlus +
        state.colorCostPlus) *
      state.quantity;
    return subtotal;
  };

  useEffect(() => {
    setIsLoad(true);
    productApi
      .getProductById(productID)
      .then((data) => {
        setProductData(data.product);

        setState({
          ...state,
          capacity: data.product.capacities[0].capacity,
          capacityCostPlus: data.product.capacities[0].plusCost,
          colorCostPlus: data.product.colors[0].color.plusCost,
          productID: data.product._id,
          indexColor: data.product.colors[0].color.indexColor,
          colorName: data.product.colors[0].color.nameColor,
          photo: data.product.colors[0].image.photo,
        });
      })
      .finally(() => setIsLoad(false));
  }, []);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addNewItemCart(state));
    messageSuccess("Đã thêm vào giỏ hàng")
  };

  if (isLoad) return <div> Loading ....</div>;
  return (
    <Fragment>
      <div className="small-container product-item">
        <div className="row">
          <div className="col-2">
            <div style={{width:"100%"}}>
            <img
              src={
                state.photo ? state.photo : productData?.colors[0].image.photo
              }
              alt=""
              width="100%"
              id="product-img"
            />
            </div>
            <br/>
            <div className="small-img-row">
              {productData?.colors.map((color) => (
                <div className="small-img-col">
                  <img
                    src={color.image.photo}
                    alt=""
                    width="100%"
                    className="small-img"
                  />
                </div>
              ))}
            </div>
            <br />
            <br />
            <h6 style={{ fontSize: "12px", width: "80%" }}>
              Description : {productData?.description}
            </h6>
            <br />
          </div>
          <div className="col-2">
            <p>Home / IPhone</p>
            <h1>{productData?.name}</h1>
            <h4>
              <NumberFormat
                value={subTotal()}
                displayType={"text"}
                thousandSeparator={true}
              />
              ₫
              <NumberFormat
                style={{
                  marginLeft: "20px",
                  fontSize: "16px",
                  textDecoration: "line-through",
                }}
                value={productData?.oldPrice}
                displayType={"text"}
                thousandSeparator={true}
              />{" "}
              ₫
            </h4>

            <select>
              {productData?.capacities.map((capacity) => (
                <option
                  value={capacity.capacity}
                  onClick={(e) =>
                    handleChangeCapacity(capacity.capacity, capacity.plusCost)
                  }
                >
                  {capacity.capacity}GB
                </option>
              ))}
            </select>
            <div className="color-container">
              <h3 className="title-color">Color</h3>{" "}
              <div className="colors">
                {productData?.colors.map((color, index) => (
                  <span
                    onClick={(e) =>
                      handleChangeColor(
                        color.color.nameColor,
                        color.color.indexColor,
                        color.color.plusCost,
                        color.image.photo
                      )
                    }
                    className="color"
                    style={{ backgroundColor: color.color.indexColor }}
                    color={color.color.nameColor}
                  ></span>
                ))}{" "}
              </div>
            </div>
            <Card style={{ width: "80%" }}>
              <Card.Content header="Khuyến mãi , ưu đãi" />
              <Card.Content>
                <h5>
                  Sở hữu từ 27/11 - 27/12:
                  <br />
                  Hỗ trợ kích hoạt eSIM miễn phí <br />
                  Trade-in thu cũ lên đời tiết kiệm đến 21 triệu <br />
                  Trả góp 0% lãi suất qua công ty tài chính <br />
                  Tặng 3.000.000đ mua Robot hút bụi: Ecovacs Deebot 950, Ecovacs
                  Deebot T8, Ecovacs T8 Aivi, Ecovacs T8 Aivi Plus"
                </h5>
              </Card.Content>

              <Card.Content extra>
                <h5> Giảm thêm 1.5% hóa đơn dành cho thành viên chính thức</h5>
              </Card.Content>
            </Card>
            <input
              type="number"
              value={state.quantity}
              width="auto"
              min="1"
              max="10"
              onChange={(e) => handleChangeQuantity(e)}
            />
            <div className="btn" onClick={(e) => handleAddToCart()}>
              Add To Cart
            </div>

            <h3>
              Product Details <i className="fa fa-indent"></i>
            </h3>
            <Table basic="very" celled collapsing>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Thông Số Kỹ Thuật</Table.HeaderCell>
                  <Table.HeaderCell>Chi tiết</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Header.Content>Screen</Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell> {productData?.screen} </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Header as="h4" image>
                    
                      <Header.Content>
                        CPU
                        
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>{productData?.CPU}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Header.Content>Operating System</Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>{productData?.operatingSystem}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Header.Content>RAM</Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell> {productData?.RAM}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Header.Content>Front Camera</Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>{productData?.frontCamera}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Header.Content>Back Camera</Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>{productData?.backCamera}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Header.Content>Battery Capacity </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>{productData?.batteryCapacity}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Header.Content>SIM  </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>{productData?.SIM}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            
          </div>
        </div>
      </div>
      {/**Title */}
      <div className="small-container">
        <div className="row row-2">
          <h2>Related Products</h2>
          <p>View More</p>
        </div>
      </div>
      <div className="small-container">
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
        <CommentPage />
      </div>
    </Fragment>
  );
};

export default ProductItem;
