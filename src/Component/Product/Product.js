import React from 'react';
import '../Product/Product.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props);
   
    const {img, name, seller, price, stock, key} = props.product;
    return (
        <div className='product'>
            <div>
            <img src={img} alt=""/>
            </div >
            <div className='product-name'>
            <h4><Link to={"/product/" + key}>{name}</Link></h4> <br/>
           
            <p><small>By: {seller}</small></p> 
            
            <p>${price}</p> <br/>

            {/* Genjam Area */}
            
            <p><small>Only {stock} is available - Order soon</small></p>
           { props.showAddToCard  && <button className="add-button-class"
            onClick ={()=>{props.handAddCardButton(props.product)}} > <FontAwesomeIcon icon={faShoppingCart}/> Add to Card</button>}
            </div> 
        </div>
    );
};

export default Product;