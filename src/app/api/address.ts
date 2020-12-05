

import {  INewAddress, IRespondAddress, IRespondNewAddress } from "app/models/address";
import request from "./agent";

const addressApi = {
    getAddress : () : Promise<IRespondAddress> => request.get('addresses'),
    addNewAddress : (newAddress: INewAddress) : Promise<IRespondNewAddress> => request.post('/addresses' ,newAddress)
};

export default addressApi;