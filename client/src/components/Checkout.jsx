import React from 'react';
import axios from 'axios';

function CheckoutButton({ orderDetails }) {
  const handleCheckout = async () => {
    try {
      const response = await axios.post('/api/checkout', orderDetails);
      const { paymentRequestDetails } = response.data;
      alert(`Please complete the payment on your phone. Order ID: ${paymentRequestDetails.orderId}`);
    } catch (error) {
      console.error('Checkout failed', error);

      // Check if error.response and error.response.data exist
      if (error.response && error.response.data) {
        // Handle cases where the server sends back a structured error response
        alert(`Checkout error: ${error.response.data.message || 'Unknown error occurred.'}`);
      } else if (error.response) {
        // Handle cases where there's a response without a data body
        alert(`Checkout error: The server responded with status ${error.response.status}`);
      } else if (error.request) {
        // The request was made but no response was received
        alert('Checkout error: No response received. Please check your network connection.');
      } else {
        // Something happened in setting up the request that triggered an Error
        alert('Checkout error: An unexpected error occurred.');
      }
    }
  };

  return (
    <button onClick={handleCheckout}>Proceed to Checkout</button>
  );
}

export default CheckoutButton;
