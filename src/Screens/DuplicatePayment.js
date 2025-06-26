import React, { useState } from 'react';
import axios from 'axios';
import './payment.css'; // Custom CSS

const DuplicatePayment = () => {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState('');

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
    setMessage("");
    

    const rupees = Number(amount);
    if (!rupees || isNaN(rupees) || rupees <= 0) {
      alert("Please enter a valid ₹ amount.");
      return;
    }

    // const paisaAmount = rupees * 100; // ₹ to paisa

    try {
      const { data } = await axios.post("https://paymentbackend-giia.onrender.com/api/payment/create", {
        amount: rupees,
      });

    const { amount, id: order_id, currency } = data.order;

    // STEP 2: Open Razorpay Checkout
    const options = {
      key: "rzp_live_V9aej9YSXimcGP", 
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
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      setMessage(" Payment failed. Please try again.");
    }
  };

  return (
    <div className="payment-container">
      <h2>Pay Payment</h2>
      <input
        type="number"
        placeholder="Enter amount in ₹"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="amount-input"
      />
      <button className="pay-btn" onClick={handlePayment}>
        Pay Now
      </button>
      {message && <p className="payment-message">{message}</p>}
    </div>
  );
};

export default DuplicatePayment;
