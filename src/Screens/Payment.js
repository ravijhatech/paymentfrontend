import React from 'react';
import axios from 'axios';

const RazorpayPayment = () => {
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpayScript();
    if (!res) {
      alert("Razorpay SDK failed to load.");
      return;
    }

    // STEP 1: Create order from backend
    const { data } = await axios.post("https://paymentbackend-giia.onrender.com/api/payment/create", {
      amount: 10 
    });

    const { amount, id: order_id, currency } = data.order;

    // STEP 2: Open Razorpay Checkout
    const options = {
      key: "rzp_test_0yV3u7XWSosE4f", 
      amount: amount,
      currency: currency,
      name: "Ravi Kumar",
      description: "Test Payment",
      order_id: order_id,
      handler: async function (response) {
        // STEP 3: Verify payment in backend
        const verifyRes = await axios.post("https://paymentbackend-giia.onrender.com/api/payment/verify", {
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          amount: amount / 100, // optional, for record
        });

        if (verifyRes.data.success) {
          alert("Payment Verified and Success!");
        } else {
          alert("Payment Failed!");
        }
      },
      prefill: {
        name: "Ravi Kumar",
        email: "ravi@example.com",
        contact: "7667000989",
      },
      notes: {
        address: "Ravi Home, Bihar, India"
      },
      theme: {
        color: "#0A2540",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div>
      <button onClick={handlePayment} style={{ padding: '10px 20px', background: '#0A2540', color: '#fff', border: 'none', borderRadius: 5 }}>
        Pay ₹10
      </button>
    </div>
  );
};

export default RazorpayPayment;
