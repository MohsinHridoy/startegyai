// src/component/Navbar.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center; // Align items vertically
  padding: 10px;
  background: #f8f9fa;
`;

const Title = styled.h1`
  margin: 0; // Remove default margin
  font-size: 24px; // Set font size
  color: black; // Set text color
`;

const NavItem = styled(Link)`
  margin: 0 15px;
  text-decoration: none;
  color: black;
`;

const Navbar = ({ userEmail }) => {
  return (
    <Nav>
      <Title>strategy.ai</Title> {/* Add the title here */}
      <div>
        <NavItem to="/">Home</NavItem>
        {userEmail ? (
          <NavItem to="/profile">{userEmail.split(" ").slice(0, 2).join(" ")}</NavItem>
        ) : (
          <NavItem to="/login">Login</NavItem>
        )}
      </div>
    </Nav>
  );
};

export default Navbar;
