import { combineReducers } from "redux";
import { productReducer, setSelectedProduct } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: setSelectedProduct
})

export default reducers;