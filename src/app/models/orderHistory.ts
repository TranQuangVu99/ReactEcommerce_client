
export interface ICapacityOrder {
    id:string
}
export interface IColorOrder{
    _id :string,
    color:string,
    image: string
}
export interface IProductIDOrder{
    capacities : ICapacityOrder[],
    _id: string,
    name : string,
    priceOnSales: number,
    priceOnPurchase: number,
    description: string,
    installment: boolean,
    oldPrice : number,
    bonusTitle: string,
    bonusContent: string,
    isExists: boolean,
    screen: string,
    operatingSystem: string,
    frontCamera: string,
    backCamera: string,
    CPU : string,
    RAM : string,
    batteryCapacity: string,
    SIM : string
    colors : IColorOrder[]
}
// productID: IProductIDOrder[],
// :
// CPU: "Apple A14 Bionic (5 nm)"
// RAM: "4 GB"
// SIM: "1 Nano Sim"
// backCamera: "12 MP + 12 MP + 12 MP + TOF"
// batteryCapacity: "Lightning, USB 2.0"
// bonusContent: "Big sales nhất trên thế giới"
// bonusTitle: "Kh

// nó là mảng hay object ? obj - sua di mai a du e :(((
export interface IProductOrder{
    productID: IProductIDOrder, //? mảng ??? đễ em truyền e vào
    quantity: number,
    capacity: number,
    color: string,
    capacityCostPlus: number,
    colorCostPlus: number,
    photo: string
}

export interface IProductOrderHistory{
    products : IProductOrder[]
    estimatedDelivery:string,
    
}

export interface IResponseOrderHistory {
    success : boolean,
    orders : IProductOrderHistory[]
}