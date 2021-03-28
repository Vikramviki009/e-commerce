import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HpN9bCzPxoXYA5ljFookKlnAFIvNO9se0Ra9kDhB7eCgwh13ZoZOeRyJdayYymkOOelwbowGhdMinWt9eEqfhyw00XUvzGuVX';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    };

    return(
        <StripeCheckout
            label='Pay Now'
            name= 'E-commerce'
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description={`Your Total Value is $${price}`}
            amount = {priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;