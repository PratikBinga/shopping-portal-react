import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSelectedProduct, removeSelectedProduct } from '../redux/actions/productActions';

const ProductDetail = () => {

    const product = useSelector(state => state.product)
    const { image, title, price, category, description } = product;
    const { productId } = useParams();
    console.log(productId, "prodID");
    const dispatch = useDispatch();

    useEffect(() => {
        if (productId && productId !== "")
            dispatch(fetchSelectedProduct(productId));
        window.scrollTo(0, 0)

        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productId])
    console.log(product, "product detail single")
    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
                // <div class="ui segment">
                //     <div class="ui active dimmer">
                <div class="ui massive active centered inline loader"></div>

            ) : (
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider">AND</div>
                        <div className="middle aligned row">
                            <div className="column lp">
                                <img className="ui fluid image" src={image} />
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2>
                                    <a className="ui teal tag label">${price}</a>
                                </h2>
                                <h3 className="ui brown block header">{category}</h3>
                                <p>{description}</p>
                                <div className="ui vertical animated button" tabIndex="0">
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    <div className="visible content">Add to Cart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div >
    )
}

export default ProductDetail;