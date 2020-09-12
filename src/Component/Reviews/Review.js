import React, {useState} from 'react';
import { useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItems/ReviewItem';
import '../Reviews/Reviews.css';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';
import { useHistory } from 'react-router-dom';

const Review = (props) => {
        
    const [cart, searchCart] = useState([]);
    const [orderPlaced , setPlaceOrder] = useState([]);

    const history = useHistory([]);

    const proceedCheckOutButton = () => {
            history.push('/shipment');
    }

    const removeProduct = (productKey) => {
         const newCarts = cart.filter(pd => pd.key !== productKey);
         searchCart(newCarts);
         removeFromDatabaseCart(productKey);
    }
        
        useEffect (()=>{
            const saveCart = getDatabaseCart();
            const productKeys = Object.keys(saveCart)
            
            const productCart = productKeys.map(key => {
                const product = fakeData.find( pd => pd.key === key);
                product.quantity = saveCart[key];
                return product;
            })
            searchCart(productCart);

        
    }, []);


   

    return (
        <div className="twin-shop-container">
        
        
        <div className="twin-product-container">
            {
                cart.map(pd => <ReviewItem 
                    key ={pd.key}
                    removeProduct = {removeProduct}
                    product ={pd}> 
                    </ReviewItem>)
            }
       
        </div>   
        <div className="product-cart">
        <Cart carts = {cart}></Cart>

          <button onClick={proceedCheckOutButton} className="add-button-class">Proceed Checkout</button>
            
        </div>
    </div>
    );
};

export default Review;