import React from 'react';
import axios from 'axios';

function CheckoutButton({ orderDetails }) {
  const handleCheckout = async () => {
    try {
      // Replace with your backend's checkout endpoint
      const response = await axios.post('/api/checkout', orderDetails);
      const { paymentRequestDetails } = response.data;

      // The backend should return the paymentRequestDetails that include any info needed to prompt the user for payment
      alert(`Please complete the payment on your phone. Order ID: ${paymentRequestDetails.orderId}`);
      
      // You would have logic here to handle the payment confirmation as well
      // This could involve polling the backend to check the payment status, or handling a real-time update

    } catch (error) {
      console.error('Checkout failed', error);
      alert('There was an issue with your checkout. Please try again.');
    }
  };

  return (
    <button onClick={handleCheckout}>Proceed to Checkout</button>
  );
}

export default CheckoutButton;
