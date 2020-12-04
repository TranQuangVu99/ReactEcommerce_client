
export interface IOrderDetail{
    name : string,
    image : string,
    quantity: number,
    price: number
}

export interface IProductOrderHistory{
    orderDetail : IOrderDetail[]
    estimatedDelivery:Date,
    
}

export interface IResponseOrderHistory {
    success : boolean,
    orders : IProductOrderHistory[]
}