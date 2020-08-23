import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import '../Shop/Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';



const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProduct] = useState (first10);

    const [carts, setCarts] = useState([])

    const handAddCardButton = (product) =>{
        
        const newCart = [...carts, product]
        setCarts(newCart);
    }
    
    return (
        <div className="shop-container">
            <div className="product-container">
                    {
                        products.map(pad => 
                        <Product product={pad}
                        handAddCardButton = {handAddCardButton}>

                        </Product>)
                    }
            </div>
            <div className="card-container">
                <Cart carts ={carts}></Cart>
                
            </div>
                
        </div>
    );
};

export default Shop;