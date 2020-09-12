import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import { useEffect } from 'react';
import '../Shop/Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart} from '../../utilities/databaseManager';
import {getDatabaseCart} from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';


const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProduct] = useState (first10);

    const [carts, setCarts] = useState([])
    
    useEffect ( () => {
        const saveCart = getDatabaseCart ();
        const productKeys = Object.keys(saveCart);
        const previousCart = productKeys.map(existingKey =>{
            const product = fakeData.find(pd => pd.key === existingKey)
            product.quantity = saveCart[existingKey];
            return product;
        })
        console.log(previousCart);

    }, [])



    const handAddCardButton = (product) =>{
        
        const toBeAddedKey = product.key;
        
        const sameProduct = carts.find( pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = carts.filter (pd => pd.key !== toBeAddedKey)
            newCart = [...others, sameProduct];  
        }
        else {
            product.quantity = 1;
            newCart = [...carts, product]
            
        }
        setCarts(newCart);
        addToDatabaseCart(product.key, count);
    }
    
    return (
        <div className="shop-container">
            <div className="product-container">
                    {
                        products.map(pd => 
                        <Product key={pd.key} showAddToCard = {true} product={pd}
                        handAddCardButton = {handAddCardButton}>
                            

                        </Product>)
                    }
            </div>
            <div className="card-container">
                <Cart carts ={carts}></Cart>
                <Link to="/review">
                <button className="add-button-class">Review Order</button>
            </Link>
                
            </div>
                
        </div>
    );
};

export default Shop;