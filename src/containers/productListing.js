import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductComponent from './productComponent';
import { useDispatch } from 'react-redux';
import { productReducer } from '../redux/reducers/productReducer';
import { fetchProducts } from '../redux/actions/productActions';

const ProductListing = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])


    const products = useSelector((state) => state);
    console.log(products, "products useselector")
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing;