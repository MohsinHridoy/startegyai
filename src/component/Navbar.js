import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #282c34;
  color: white;
  z-index: 1000;
`;

const Title = styled.h1`
  margin: 0;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
`;

const NavItem = styled.li`
  margin: 0 15px;
`;

const Navbar = () => {
  return (
    <Nav>
      <Title>StrategyAI</Title>
      <NavList>
        <NavItem>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default React.memo(Navbar);
