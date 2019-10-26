import { Module, StoreonEvents } from 'storeon';

export enum ViewPagerIndex {
    Orders = 0,
    Map = 1
}

export interface IUIState {
    viewPagerIndex: ViewPagerIndex;
    showFullOrder: boolean
}

const initUIState: IUIState = {
    viewPagerIndex: ViewPagerIndex.Orders,
    showFullOrder: false,
}

export interface IUIEvents extends StoreonEvents<IUIState> {
    "switchPage": ViewPagerIndex;
    "showFullOrder": boolean;
}

const uiReducer: Module<IUIState, IUIEvents> = store => {
    store.on("@init", () => initUIState);

    store.on("switchPage", (_state, index) => ({ viewPagerIndex: index }));
    store.on("showFullOrder", (_state, flag:boolean) => ({showFullOrder: flag}))
};

export default uiReducer;