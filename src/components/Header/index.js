import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/">
        <FaHome fontSize={24} />
      </Link>
      <Link to="/register">
        <FaUserAlt fontSize={24} />
      </Link>
      <Link to="/login">
        <FaSignInAlt fontSize={24} />
      </Link>
    </Nav>
  );
}
