import React from 'react';
import '../Product/Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props);
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className='product'>
            <div>
            <img src={img} alt=""/>
            </div >
            <div className='product-name'>
            <h4>{name}</h4> <br/>
            <p><small>By: {seller}</small></p> 
            <p>${price}</p> <br/>
            <p><small>Only {stock} is available - Order soon</small></p>
            <button className="add-button-class"
            onClick ={()=>{props.handAddCardButton(props.product)}} > <FontAwesomeIcon icon={faShoppingCart}/> Add to Card</button>
            </div> 
        </div>
    );
};

export default Product;