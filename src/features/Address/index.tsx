import { RootState } from "app/store";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Header, Modal } from "semantic-ui-react";
import "./Addess.scss";
import { addNewAddress, fetchAllAddress } from "./addressSlice";
function Address() {
  const {addresses} = useSelector((state: RootState) => state.addresses);
  
  console.log(addresses)
  const [open, setOpen] = React.useState(false);
  const [contruy, setContruy] = useState("");
  const [fullName, setFullName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [numberPhone, setNumberPhone] = useState("");

  const handleChangeContruy = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setContruy(value);
  };
  const handleChangeFullName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFullName(value);
  };
  const handleChangeStreet = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setStreet(value);
  };
  const handleChangeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCity(value);
  };
  const handleChangeRegion = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRegion(value);
  };
  const handleChangeZipCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setZipCode(value);
  };
  const handleChangeNumberPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNumberPhone(value);
  };
  const dispatch = useDispatch()
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(addNewAddress({
      country : contruy,
      fullName: fullName,
      streetAddress : street,
      city : city,
      state:region,
      zipCode : parseInt(zipCode),
      phoneNumber:numberPhone
    }))
    setOpen(false);
  };
  
  useEffect(() => {
    dispatch(fetchAllAddress())
  }, [])
  return (
    <Fragment>
      <div className="small-container">
        <h1>Địa Chỉ Giao Hàng</h1>
        <div className="row">
          <div className="col-2">
            <Modal
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              open={open}
              trigger={
                <div className="a-box">
                  <div className="a-box-inner">
                    <i className="fa fa-plus"></i>
                    <h2>Thêm Địa Chỉ</h2>
                  </div>
                </div>
              }
            >
              <Modal.Header>Address</Modal.Header>
              <Modal.Content image>
                <Modal.Description>
                  <Header>Thêm Mới Địa Chỉ</Header>
                  <Form>
                    <Form.Field>
                      <label>Quốc gia/ Khu vực</label>
                      <input
                        placeholder="Việt nam"
                        value={contruy}
                        onChange={(e) => handleChangeContruy(e)}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Họ và tên</label>
                      <input
                        placeholder="Nguyễn Văn A"
                        value={fullName}
                        onChange={(e) => handleChangeFullName(e)}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Tên đường , tên địa chỉ nhà , số nhà</label>
                      <input
                        placeholder="14 Nguyễn Văn Bảo"
                        value={street}
                        onChange={(e) => handleChangeStreet(e)}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Thành phố</label>
                      <input
                        placeholder="TP. Hồ Chí Minh"
                        value={city}
                        onChange={(e) => handleChangeCity(e)}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Tỉnh/ Quận</label>
                      <input
                        placeholder="Quận Gò Vấp"
                        value={region}
                        onChange={(e) => handleChangeRegion(e)}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>ZipCode</label>
                      <input
                        placeholder="63000000"
                        value={zipCode}
                        onChange={(e) => handleChangeZipCode(e)}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Số điện thoại</label>
                      <input
                        placeholder="0123456789"
                        value={numberPhone}
                        onChange={(e) => handleChangeNumberPhone(e)}
                      />
                    </Form.Field>
                  </Form>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button color="black" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button
                  content="Submit"
                  labelPosition="right"
                  icon="checkmark"
                  onClick={(e) => handleSubmit(e)}
                  positive
                />
              </Modal.Actions>
            </Modal>
          </div>
          <div className="col-2">
          {addresses.map((address) => (
            <div className="a-box-normal">
              <div className="a-box-inner" style={{ padding: "0!important" }}>
                <div className="address-section">
                  
                    <ul className="nonstyle">
                      <li>
                        <h5>
                          <b>
                            {address.fullName}
                          </b>
                        </h5>
                      </li>
                      <li>{address.streetAddress}</li>
                      <li>
                        {address.city}, {address.state} {address.zipCode}
                      </li>
                      <li>{address.country}</li>
                      <li>Phone number: {address.phoneNumber}</li>
                    </ul>
                  
                  <div className="edit-address">
                    <div>Edit</div>
                    &nbsp; |&nbsp;
                    <div>Delete</div>
                    &nbsp; |&nbsp;
                    <div>Set as Default</div>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Address;
