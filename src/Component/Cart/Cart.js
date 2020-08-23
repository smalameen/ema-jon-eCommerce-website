import React from 'react';

const Cart = (props) => {
    const carts = props.carts;

    let total = 0;
    for (let i = 0; i< carts.length; i++) {
      const product = carts[i];
      total = total + product.price;       
    }

    let shipping = 0;
    if(total>500){
        shipping = 0;
    } else if (total > 200){
        shipping = 4.99;
    } else if(total > 0){
        shipping = 12;
    }

    let tax = (total /10);
    let granTotal = (total+ shipping + Number(tax)).toFixed(2); 

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return (precision);
    }
    
    return (
        <div>
            <h4>Order Summery </h4>
           <p>Items Ordered: {carts.length}</p>
           <p>Product Price : {formatNumber(total)}</p>
            <p><small>Shipping Cost : {shipping} </small></p>
            <p><small>Tax + Vat : {tax.toFixed(2)} </small></p>
            
            <h3>Total Price : {granTotal}</h3>
        </div>
    );
};

export default Cart;