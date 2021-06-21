import {combineReducers} from "redux";
import {waterBalanceReducers as waterBalance} from "./WaterBalance/reducers";


export const reducers = combineReducers({
    waterBalance
})
