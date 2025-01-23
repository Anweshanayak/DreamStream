import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock login validation
    if (email === "admin@example.com" && password === "password") {
      // Navigate to the dashboard
      navigate("/dashboard");
    } else {
      alert("Invalid login credentials");
    }
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center vh-100"
      style={{ backgroundColor: "#F8F9FA" }}
    >
      <div
        className="card shadow p-4"
        style={{
          width: "400px",
          borderRadius: "8px",
          border: "1px solid #ECEEF0",
        }}
      >
        <h2 className="text-center mb-4">Log In</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
