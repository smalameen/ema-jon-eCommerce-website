import React from 'react';

const NoFound = () => {
    const style = {
        fontSize: '100px',
        textAlign: 'center',
        color: 'red'
    }
    return (
       <div className = {style}>
            <h1 style={style}> No Page Found </h1>
            <h2 style={style}> 404 Error!!!!!</h2>
       </div>
            
        
    );
};

export default NoFound;