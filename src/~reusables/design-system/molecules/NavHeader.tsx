// modules
import React from "react";

// components
import { Container } from "../atoms/Primitives/Primitives";
import { H3, P2 } from "../atoms/Text/Text";
import { Link } from "react-router-dom";

const NavHeader: React.FC = () => {
  return (
    <Container justifyContent="space-between" py={7}>
      <Link to="/">
        <H3 color="lightTitle">NaijaHacks</H3>
      </Link>
      <Link to="/login">
        <P2 color="primary">Login</P2>
      </Link>
    </Container>
  );
};

export default NavHeader;
