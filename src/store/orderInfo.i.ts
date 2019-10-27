
export interface IActor {
    "id": number,
    "name": string,
    "surname": string,
    "homeAddress"?: string | null,
    "rating": number,
    "numberOfMarks"?: number
}

export interface ILocation{
    x:string,
    y:string
}

export interface IOrder {
    "name": string,
    "id": number,
    "customer": IActor,
    "courier": IActor,
    "orderStatus": string,
    "registrationDate": string,
    "assigningDate": null,
    "pickUpDate": null,
    "deliveryDate": null,
    "fromLocation": ILocation,
    "toLocation": ILocation,
    "goodsDescription": string | null,
    "review": string | null,
    price: number
}