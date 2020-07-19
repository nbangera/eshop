export interface IShop{
    id:number,
    title:string,
    routeName : string,
    items:IShopItem[]
}

export interface IShopItem{
    id:number,
    name:string,
    imageUrl : string,
    price:number
}