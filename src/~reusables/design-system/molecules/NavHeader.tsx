// modules
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Search } from "react-feather";

// components
import { Container, Flex, Box } from "../atoms/Primitives/Primitives";
import { H3, P2 } from "../atoms/Text/Text";
import { AuthContext } from "../../../contexts/AuthContext";

const NavHeader: React.FC = () => {
  const auth = useContext(AuthContext);
  return (
    <Container
      justifyContent="space-between"
      alignItems="center"
      py={7}
      width="100%"
    >
      <Link to="/">
        <H3 color="lightTitle">NaijaHacks</H3>
      </Link>
      {auth.userId ? (
        <Flex alignItems="center">
          <Box bg="primary" borderRadius={5} p={4} mr={5}>
            <Search color="white" />
          </Box>
          <Box
            bg="lightBackground"
            borderRadius={5}
            width="36px"
            height="36px"
          ></Box>
        </Flex>
      ) : (
        <Link to="/login">
          <P2 color="primary">Login</P2>
        </Link>
      )}
    </Container>
  );
};

export default NavHeader;
