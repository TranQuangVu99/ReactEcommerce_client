import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import paymentApi from "app/api/payment";
import { messageError, messageSuccess } from "app/notification/message";
import { RootState } from "app/store";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

interface IProps{
    totalPrice:number
}

const CheckoutForm:React.FC<IProps> = ({totalPrice})=> {
  const {carts} = useSelector((state : RootState) => state.cart)
  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };
  
  const {email,isLogin} = useSelector((state : RootState) => state.account)
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory()
  const handleSubmit = async (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!stripe || !elements) {
      return;
    }

    const res = await paymentApi.payment(
      {
        email : email , 
        totalPrice : totalPrice,
        estimatedDelivery:new Date(),
      },
      carts
    )
    const clientSecret = res.client_secret

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
        billing_details: {
          email: email,
        },
      },
    });
    
    if (result.error) {
      console.log(result.error.message);
      messageError("Thanht toán thất bại")
    } else {
      // The payment has been processed!
      if (result.paymentIntent?.status === "succeeded") {
        console.log("Money is in the bank!");
        messageSuccess("Thanh toán thành công")
        history.push('/')

      }
    }
  };
  return (
    <form onSubmit={e=>{e.preventDefault()}} className="form-payment">
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <div>
        <span>
          <strong>Đảm bảo địa chỉ của bạn chính xác</strong>
        </span>
      </div>
      <button  onClick={e=>handleSubmit(e)} className="btn-purchase">Mua Hàng</button>
    </form>
  );
}

export default CheckoutForm;
