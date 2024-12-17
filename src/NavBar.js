import React, { useState } from "react";
import {
  Nav,
  Logo,
  NavLinks,
  NavLink,
  Dropdown,
  ActionButtons,
} from "./Navbar.styles";
import DropdownContent from "./DropdownContent"; // Import DropdownContent

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <Nav>
      <Logo>Logo</Logo>
      <NavLinks>
        <NavLink>Home Page</NavLink>
        <NavLink>About Us</NavLink>
        <NavLink>Get Involved</NavLink>
        <NavLink onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          More Links
          {isDropdownOpen && (
            <Dropdown>
              <DropdownContent /> {/* Use DropdownContent Component */}
            </Dropdown>
          )}
        </NavLink>
      </NavLinks>
      <ActionButtons>
        <button>Join</button>
        <button>Learn</button>
      </ActionButtons>
    </Nav>
  );
};

export default Navbar;
