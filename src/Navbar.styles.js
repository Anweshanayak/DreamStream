import styled from "styled-components";

export const Nav = styled.nav`
  position: relative; /* Anchor the dropdown to Nav */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f9fa;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000; /* Ensure the navbar is above other content */
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLink = styled.div`
  position: relative; /* Anchor the dropdown to this element */
  margin: 0 15px;
  cursor: pointer;

  &:hover > div {
    display: flex; /* Show dropdown on hover */
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%; /* Position the dropdown below the NavLink */
  left: 0; /* Align with the left edge of the screen */
  width: 100%; /* Make it span the full screen width */
  display: flex;
  justify-content: space-between;
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 9999; /* Ensure it appears on top of other content */
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 10px;

  button {
    padding: 8px 15px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
