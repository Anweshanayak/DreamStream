import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh", // Ensures the container takes the full height
        paddingTop: "40px", // Adds space at the top
        paddingBottom: "40px", // Adds space at the bottom
        backgroundColor: "#F1F3F5",
      }}
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
        <h2 className="text-center mb-4">Log In</h2>
        <form>
          <div className="form-group mb-4">
            <label htmlFor="email" className="form-label">
              Email<span className="text-danger">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
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
              className="form-control"
              placeholder="Enter your password"
              required
            />
            <div className="text-end mt-2">
              <a href="#" className="text-decoration-none">
                Forgotten password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-success w-100"
            style={{
              borderRadius: "8px",
              height: "48px",
            }}
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
