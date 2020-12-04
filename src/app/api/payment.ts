

import { IRespondPayment,IPayment } from "app/models/payment";
import request from "./agent";

const paymentApi = {
  payment: (data : IPayment) : Promise<IRespondPayment> => request.post("/pay",data)
};

export default paymentApi;