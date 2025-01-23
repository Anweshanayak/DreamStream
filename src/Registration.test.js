import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Registration from "./Registration";

describe("Registration Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders the registration form correctly", () => {
    render(<Registration />);

    // Check for form fields
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByTestId("password-input")).toBeInTheDocument();
    expect(screen.getByTestId("confirm-password-input")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /register/i })).toBeInTheDocument();
  });

  test("displays error when passwords do not match", async () => {
    render(<Registration />);

    // Fill in the form
    await userEvent.type(screen.getByLabelText(/email/i), "test@example.com");
    await userEvent.type(screen.getByTestId("password-input"), "password123");
    await userEvent.type(screen.getByTestId("confirm-password-input"), "password456");

    // Mock window.alert
    window.alert = jest.fn();

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    // Expect alert to be called with the error
    expect(window.alert).toHaveBeenCalledWith("Passwords do not match!");
  });

  test("calls alert with success message on successful registration", async () => {
    render(<Registration />);

    // Fill in the form
    await userEvent.type(screen.getByLabelText(/email/i), "test@example.com");
    await userEvent.type(screen.getByTestId("password-input"), "password123");
    await userEvent.type(screen.getByTestId("confirm-password-input"), "password123");

    // Mock window.alert
    window.alert = jest.fn();

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    // Expect alert to be called with the success message
    expect(window.alert).toHaveBeenCalledWith("Registration successful!");
  });

  test("toggles password visibility", async () => {
    render(<Registration />);

    const passwordInput = screen.getByTestId("password-input");
    const confirmPasswordInput = screen.getByTestId("confirm-password-input");
    const passwordToggleButton = screen.getByTestId("password-toggle");
    const confirmPasswordToggleButton = screen.getByTestId("confirm-password-toggle");

    // Check initial password types
    expect(passwordInput).toHaveAttribute("type", "password");
    expect(confirmPasswordInput).toHaveAttribute("type", "password");

    // Toggle visibility for password
    fireEvent.click(passwordToggleButton);
    expect(passwordInput).toHaveAttribute("type", "text");

    // Toggle visibility for confirm password
    fireEvent.click(confirmPasswordToggleButton);
    expect(confirmPasswordInput).toHaveAttribute("type", "text");

    // Toggle back to hidden for both
    fireEvent.click(passwordToggleButton);
    expect(passwordInput).toHaveAttribute("type", "password");

    fireEvent.click(confirmPasswordToggleButton);
    expect(confirmPasswordInput).toHaveAttribute("type", "password");
  });
});
