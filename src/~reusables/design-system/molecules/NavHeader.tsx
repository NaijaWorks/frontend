// modules
import React, { useContext, useState } from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { LogOut, Settings, UserCheck } from "react-feather";
import { gql } from "apollo-boost";
import { useMutation, useQuery } from "@apollo/react-hooks";

// components
import { Container, Flex, Box } from "../atoms/Primitives/Primitives";
import { H3, H4 } from "../atoms/Text/Text";
import { AuthContext, AuthData } from "../../../contexts/AuthContext";
import { TextButton, PrimaryButton } from "../atoms/Button/Button";
import PopupModal from "./PopupModal";
import { Input } from "../atoms/Input/Input";
import { styled } from "../../../contexts/ThemeContext";

// styles
import { MAX_PAGE_WIDTH } from "../globals/metrics";
import { GET_USER_INFO, UserInfo } from "../../../components/admin/Info";

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

  const { data } = useQuery<{ user: UserInfo }, { id: string }>(GET_USER_INFO, {
    variables: { id: auth.id ? auth.id : "" }
  });

  const onClickLogout = () => {
    localStorage.clear();
    history.push("/")
    window.location.reload();
  };

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
            <Box
              className="log-out"
              bg="primary"
              borderRadius={5}
              p={4}
              mr={5}
              onClick={() => onClickLogout()}
            >
              <LogOut width={16} height={16} color="white" />
            </Box>

            <Link to={`/profile/${auth.id}`}>
              <Flex
                bg="lightBackground"
                borderRadius={5}
                width="36px"
                height="36px"
                justifyContent="center"
                alignItems="center"
              >
                {data && data.user && data.user.photoURL ? (
                  <img src={data.user.photoURL} alt="Profile" />
                ) : data && data.user && data.user.firstName ? (
                  <H4>
                    {(data.user.firstName && data.user.firstName[0]) || ""}
                    {(data.user.lastName && data.user.lastName[0]) || ""}
                  </H4>
                ) : (
                  <UserCheck width={20} height={20} color="#000000" />
                )}
              </Flex>
            </Link>
            <Link to={`/admin`}>
              <Box bg="primary" borderRadius={5} p={4} ml={5}>
                <Settings width={16} height={16} color="white" />
              </Box>
            </Link>
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
  .log-out {
    transform: scaleX(-1);
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    object-fit: cover;
  }
`;

export default withRouter(NavHeader);
