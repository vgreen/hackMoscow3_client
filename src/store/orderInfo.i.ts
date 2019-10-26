
export interface IActor {
    "id": number,
    "name": string,
    "surname": string,
    "homeAddress"?: string,
    "rating": number,
    "numberOfMarks"?: number
}

export interface ILocation{
    x:string,
    y:string
}

export interface IOrder {
    "id": number,
    "customer": IActor,
    "courier": IActor,
    "orderStatus": "REGISTERED",
    "registrationDate": "26.10.2019 11:11",
    "assigningDate": null,
    "pickUpDate": null,
    "deliveryDate": null,
    "fromLocation": ILocation,
    "toLocation": ILocation,
    "goodsDescription": Partial<string>,
    "review": Partial<string>
}