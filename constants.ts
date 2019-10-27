export const borderRadius = 10;
export const padding = 10;
export const viewHeight = {flex: 1, height: "100%"};

export const checkNullableString = (str: string | null) => {
    return str!== null ? str : '';
};

export interface ICard {
    name: string,
    status: string,
    order_date: string,
}