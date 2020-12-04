import React, { Fragment } from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import "./Addess.scss";
function Address() {
  const [open, setOpen] = React.useState(false);
  
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
              <Modal.Header>Select a Photo</Modal.Header>
              <Modal.Content image>
                <Modal.Description>
                  <Header>Default Profile Image</Header>
                  <p>
                    We've found the following gravatar image associated with
                    your e-mail address.
                  </p>
                  <p>Is it okay to use this photo?</p>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button color="black" onClick={() => setOpen(false)}>
                  Nope
                </Button>
                <Button
                  content="Yep, that's me"
                  labelPosition="right"
                  icon="checkmark"
                  onClick={() => setOpen(false)}
                  positive
                />
              </Modal.Actions>
            </Modal>
          </div>
          <div className="col-2">
            <div className="a-box-normal">
              <div className="a-box-inner" style={{ padding: "0!important" }}>
                <div className="address-section">
                  <ul className="nonstyle">
                    <li>
                      <h5>
                        <b>Address fullname</b>
                      </h5>
                    </li>
                    <li>streetAddress</li>
                    <li>city, state zipCode</li>
                    <li>country</li>
                    <li>Phone number: phonenumber</li>
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
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Address;
