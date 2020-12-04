import { IProduct } from "app/models/product";

export interface ICartItem{
    productID : string;
    quantity: number,
     indexColor : string,
     capacity : number,
     colorCostPlus : number,
     capacityCostPlus : number 
}
export interface IProductsAndCarts {
    products : IProduct[],
    carts : ICartItem []
}