// modules
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "react-feather";

// components
import { Container, Flex, Box } from "../atoms/Primitives/Primitives";
import { H3 } from "../atoms/Text/Text";
import { AuthContext } from "../../../contexts/AuthContext";
import { TextButton } from "../atoms/Button/Button";
import PopupModal from "./PopupModal";

const NavHeader: React.FC = () => {
  const [modal, setModal] = useState(false);
  const auth = useContext(AuthContext);
  return (
    <>
      {true && (
        <PopupModal
          title="Log in"
          setModal={setModal}
        >
          FORMS
        </PopupModal>
      )}
      <Container
        as="nav"
        justifyContent="space-between"
        alignItems="center"
        py={7}
        width="100%"
      >
        <Link to="/">
          <H3 color="lightTitle">NaijaWorks</H3>
        </Link>
        {auth.userId ? (
          <Flex alignItems="center">
            <Box bg="primary" borderRadius={5} p={4} mr={5}>
              <Search width={16} height={16} color="white" />
            </Box>
            <Box
              bg="lightBackground"
              borderRadius={5}
              width="36px"
              height="36px"
            ></Box>
          </Flex>
        ) : (
          <TextButton onClick={() => setModal(true)} color="primary">
            Login
          </TextButton>
        )}
      </Container>
    </>
  );
};

export default NavHeader;
