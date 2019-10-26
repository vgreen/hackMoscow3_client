// @ts-ignore
import createStore from 'storeon';

import uiReducer, { IUIState, IUIEvents } from './ui.reducer';
import orderReducer, {IOrderState ,IOrderEvents} from "./orderInfo.reducer";

export type TUnionState = IUIState & IOrderState;
export type TUnionEvent = IUIEvents & IOrderEvents;

export default createStore<TUnionState, TUnionEvent>([uiReducer, orderReducer]);