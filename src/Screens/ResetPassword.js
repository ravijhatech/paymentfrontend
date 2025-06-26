import { useState } from "react";

export default function ResetPassword({ email }) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleReset = async () => {
    if (password.length < 6)
      return alert("Password must be at least 6 characters");
    if (password !== confirm) return alert("Passwords do not match");

    const res = await fetch("https://foodmarketbackend.onrender.com/api/v1/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      alert("Password reset successfully");
      window.location.href = "/login";
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
        <input
          type="password"
          placeholder="New password"
          className="w-full p-3 mb-4 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="w-full p-3 mb-4 border rounded"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <button
          onClick={handleReset}
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
}
