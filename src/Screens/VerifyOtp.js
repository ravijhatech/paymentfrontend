import { useState } from "react";
import ResetPassword from "./ResetPassword";

export default function VerifyOtp({ email }) {
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(2);

  const handleVerifyOtp = async () => {
    if (otp.length !== 6) return alert("OTP must be 6 digits");

    const res = await fetch("https://foodmarketbackend.onrender.com/api/v1/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });

    const data = await res.json();
    if (res.ok) {
      alert("OTP verified");
      setStep(3);
    } else {
      alert(data.message);
    }
  };

  return step === 2 ? (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Verify OTP</h2>
        <input
          type="text"
          maxLength={6}
          placeholder="Enter 6-digit OTP"
          className="w-full p-3 mb-4 border rounded"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button
          onClick={handleVerifyOtp}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Verify OTP
        </button>
      </div>
    </div>
  ) : (
    <ResetPassword email={email} />
  );
}
