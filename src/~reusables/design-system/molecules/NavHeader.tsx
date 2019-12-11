// modules
import React, { useContext, useState } from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { Search } from "react-feather";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

// components
import { Container, Flex, Box } from "../atoms/Primitives/Primitives";
import { H3 } from "../atoms/Text/Text";
import { AuthContext, AuthData } from "../../../contexts/AuthContext";
import { TextButton, PrimaryButton } from "../atoms/Button/Button";
import PopupModal from "./PopupModal";
import { Input } from "../atoms/Input/Input";
import { styled } from "../../../contexts/ThemeContext";

// styles
import { MAX_PAGE_WIDTH } from "../globals/metrics";

// mutation
const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      firstName
      lastName
      email
      photoURL
      token
    }
  }
`;

interface OwnProps extends RouteComponentProps {}

const NavHeader: React.FC<OwnProps> = ({ history }) => {
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const auth = useContext(AuthContext);

  const [login] = useMutation<
    { login: AuthData },
    { email: string; password: string }
  >(LOGIN, {
    variables: { email: form.email, password: form.password },
    update(cache, { data }) {
      if (data) {
        auth.setAuth(data.login);
        history.push("/admin");
      }
    }
  });

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledNavHeader>
      {modal && (
        <PopupModal title="Log in to your account" setModal={setModal}>
          <form onSubmit={onFormSubmit}>
            <Input
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              width="100%"
              placeholder="Email address"
              type="text"
            />
            <Input
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              width="100%"
              placeholder="Password"
              type="password"
            />
            <Flex justifyContent="flex-end">
              <PrimaryButton>Log in</PrimaryButton>
            </Flex>
          </form>
        </PopupModal>
      )}
      <Container
        as="nav"
        justifyContent="space-between"
        alignItems="center"
        py={7}
        width="100%"
        margin="0 auto"
        maxWidth={MAX_PAGE_WIDTH}
      >
        <Link to="/">
          <H3 color="lightTitle">NaijaWorks</H3>
        </Link>
        {auth.id ? (
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
    </StyledNavHeader>
  );
};

const StyledNavHeader = styled.div`
  padding: 0 ${props => props.theme.space[7]}px;
  background: ${props => props.theme.colors.background};
`;

export default withRouter(NavHeader);
