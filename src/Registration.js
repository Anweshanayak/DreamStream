import React, { useState } from "react";

function Registration() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Registration successful!");
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center vh-100"
      style={{ backgroundColor: "#F8F9FA" }}
    >
      <div
        className="card shadow"
        style={{
          width: "480px",
          borderRadius: "8px",
          border: "1px solid #ECEEF0",
          padding: "48px",
        }}
      >
        <h2 className="text-center mb-4">Registration</h2>
        <div className="d-flex justify-content-center mb-4">
          {/* Progress Bar */}
          <div className="d-flex gap-3">
            {[1, 2, 3, 4].map((step, index) => (
              <div
                key={index}
                className={`rounded-circle text-center ${
                  step === 1 ? "bg-success text-white" : "text-muted"
                }`}
                style={{
                  width: "30px",
                  height: "30px",
                  lineHeight: "30px",
                  border: "1px solid #00A676",
                }}
              >
                {step}
              </div>
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-4">
            <label htmlFor="email" className="form-label">
              Email<span className="text-danger">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="password" className="form-label">
              Password<span className="text-danger">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password<span className="text-danger">*</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="form-control"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-success w-100"
            style={{ borderRadius: "8px", height: "48px" }}
          >
            Log in
          </button>
        </form>
        <div className="text-center mt-3">
          <p>
            Already have an account? <a href="/login">Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registration;
