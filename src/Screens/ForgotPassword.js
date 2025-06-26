// import React, { useState, useEffect } from "react";

// const ForgotPassword = () => {
//   const [step, setStep] = useState(1); // 1: email, 2: otp, 3: new password
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [timer, setTimer] = useState(60);

//   useEffect(() => {
//     let interval;
//     if (step === 2 && timer > 0) {
//       interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
//     }
//     return () => clearInterval(interval);
//   }, [step, timer]);

//   const handleSendOtp = async() => {
//     const res = await fetch("http://localhost:5000/api/v1/send-otp",{
//       method:"POST",
//       headers:{"Content-Type":"application/json"},
//       body:JSON.stringify({email}),
//     });
//     const data = await res.json();
//     if(data.success){
//       alert("Otp send to your email");
      
//       setTimer(60);
//     }else{
//       alert(data.message || "Failed to send otp");
//     }
//     setStep(2);
//   };

//   const handleVerifyOtp = async () => {
//         const res = await fetch("http://localhost:5000/api/v1/verify-otp",{
//       method:"POST",
//       headers:{"Content-Type":"application/json"},
//       body:JSON.stringify({email,otp}),
//     });
//     const data = await res.json();
//     if(data.success){
//       alert("Otp Verified Sucessfully");
      
//       setTimer(60);
//     }else{
//       alert(data.message || "Failed to send otp");
//     }
//     setStep(3);
//   };

//   const handleResetPassword = async () => {
//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }
//         const res = await fetch("http://localhost:5000/api/v1/reset-password",{
//       method:"POST",
//       headers:{"Content-Type":"application/json"},
//       body:JSON.stringify({email,password}),
//     });
//     const data = await res.json();
//     if(data.success){
//       alert("Password Changed Sucessfully");
      
//       setTimer(60);
//     }else{
//       alert(data.message || "Failed to send otp");
//     }
//     setStep(2);
//   };
    

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md space-y-6">
//         <h2 className="text-2xl font-bold text-center text-indigo-600">
//           Forgot Password
//         </h2>

//         {step === 1 && (
//           <div className="space-y-4">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <button
//               onClick={handleSendOtp}
//               className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
//             >
//               Send OTP
//             </button>
//           </div>
//         )}

//         {step === 2 && (
//           <div className="space-y-4">
//             <input
//               type="text"
//               placeholder="Enter OTP"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//             />
//             <button
//               onClick={handleVerifyOtp}
//               className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
//             >
//               Verify OTP
//             </button>

//             <div className="text-center text-sm text-gray-600">
//               Didn’t receive OTP?
//               <button
//                 disabled={timer !== 0}
//                 onClick={handleSendOtp}
//                 className={`ml-2 font-medium ${
//                   timer === 0
//                     ? "text-indigo-600 hover:underline"
//                     : "text-gray-400"
//                 }`}
//               >
//                 Resend OTP {timer !== 0 && `in ${timer}s`}
//               </button>
//             </div>
//           </div>
//         )}

//         {step === 3 && (
//           <div className="space-y-4">
//             <input
//               type="password"
//               placeholder="New Password"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//             <button
//               onClick={handleResetPassword}
//               className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
//             >
//               Reset Password
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;

import { useState } from "react";
import VerifyOtp from "./VerifyOtp";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);

  const handleSendOtp = async () => {
    if (!email || !email.includes("@")) return alert("Enter valid email");
    const res = await fetch("https://foodmarketbackend.onrender.com/api/v1/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (res.ok) {
      alert("OTP sent to email");
      setStep(2);
    } else {
      alert(data.message);
    }
  };

  return step === 1 ? (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 mb-4 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleSendOtp}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Send OTP
        </button>
      </div>
    </div>
  ) : (
    <VerifyOtp email={email} />
  );
}
