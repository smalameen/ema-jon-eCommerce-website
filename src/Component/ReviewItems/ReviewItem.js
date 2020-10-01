import React from 'react';

const ReviewItem = (props) => {
    console.log(props);
    const {img, name, price, key, quantity} = props.product;
    return (
        <div className="product"> 
        <div>
            <img src={img} alt=""/>
        </div>

        <div>
            <h4 className="product-name">{name}</h4>
            <p>Price : {price}</p>
            <p>Quantity : {quantity} </p>
            <button className="add-button-class" onClick ={ ()=> props.removeProduct(key)}> Remove </button>
        </div>
        </div>
        
        
    );
};

export default ReviewItem;