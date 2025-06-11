import React, { useEffect, useState } from 'react';
import styling from'../Cart/total.module.css';
import { useUser } from '@clerk/clerk-react';
const Total = ({finalPrice, setShowAuthModal}) => {
    const { isSignedIn } = useUser();
    const handlePayment = () => {
        if (!isSignedIn) {
          setShowAuthModal(true);
        }
        else {
          alert("Payment confirmed");
        }
    };
    return (
       <div className={styling.mainTotal}>
            <div>
            <p>Taxs: 30%</p>
            <p>service: 10%</p>
            <p>Totla price:{finalPrice}</p>
            </div>
            <div className={styling.buttonWrapper}>
                <button onClick={()=>handlePayment()}>Confirm payment</button>
                <button>Add Coupon</button>
            </div>
        </div>
    );
}

export default Total;
