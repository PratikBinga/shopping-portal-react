import api from "../../apis/api";
import { ActionTypes } from "../constants/action-types"

export const fetchProducts = () => async (dispatch) => {
    const response = await api.get("/products")
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data })
}

export const fetchSelectedProduct = (id) => async (dispatch) => {
    const response = await api.get(`/products/${id}`)
    dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data })
}

// return async function (dispatch, getState) {
//     const response = await api.get("/products")
//     dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data })
// }


export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const setSelectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}