// modules
import React, { useState, useContext } from "react";
import { RouteComponentProps, Redirect } from "react-router";
import { styled } from "../../contexts/ThemeContext";
import { gql } from "apollo-boost";
import { useMutation, useQuery } from "@apollo/react-hooks";

// components
import {
  Container,
  Flex,
  Box
} from "../../~reusables/design-system/atoms/Primitives/Primitives";
import NavHeader from "../../~reusables/design-system/molecules/NavHeader";
import { H1, P1 } from "../../~reusables/design-system/atoms/Text/Text";
import {
  PrimaryButton,
  SecondaryButton
} from "../../~reusables/design-system/atoms/Button/Button";
import profile from "../../~reusables/assets/Profile.png";
import FreelancerCard from "../../~reusables/design-system/molecules/FreelancerCard";
import PopupModal from "../../~reusables/design-system/molecules/PopupModal";
import { Input } from "../../~reusables/design-system/atoms/Input/Input";

// styles
import { MAX_PAGE_WIDTH } from "../../~reusables/design-system/globals/metrics";
import { AuthContext, AuthData } from "../../contexts/AuthContext";
import { UserCards, GET_USER_CARDS } from "../discover/Discover";

interface LandingProps extends RouteComponentProps {}

// mutation
const REGISTER = gql`
  mutation register($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      id
      firstName
      lastName
      email
      photoURL
      token
    }
  }
`;

const Landing: React.FC<LandingProps> = ({ history }) => {
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const auth = useContext(AuthContext);

  const { data } = useQuery<{ users: UserCards[] }>(GET_USER_CARDS);

  const [register] = useMutation<
    { register: AuthData },
    { email: string; password: string }
  >(REGISTER, {
    variables: { email: form.email, password: form.password },
    update(cache, { data }) {
      if (data) {
        auth.setAuth(data.register);
        history.push("/admin");
      }
    }
  });

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await register();
    } catch (err) {
      console.log(err);
    }
  };

  if (auth.id) return <Redirect from="/" to="/discover" />;

  return (
    <>
      {modal && (
        <PopupModal title="Create a new account" setModal={setModal}>
          <form onSubmit={onFormSubmit}>
            <Input
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              width="100%"
              placeholder="Email address"
              type="email"
              required
            />
            <Input
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              width="100%"
              placeholder="Password"
              type="password"
              required
            />
            <Flex justifyContent="flex-end">
              <PrimaryButton>Sign up</PrimaryButton>
            </Flex>
          </form>
        </PopupModal>
      )}
      <NavHeader />
      <StyledTopLanding>
        <Container
          maxWidth={MAX_PAGE_WIDTH}
          margin="0 auto"
          flexDirection="column"
        >
          <Flex
            className="flex-container"
            as="header"
            justifyContent="space-between"
            pt={7}
            pb={9}
          >
            <Box className="box-container">
              <H1 color="lightTitle">
                The talent you need.
                <br /> The flexibility you want.
              </H1>
              <P1 py={7} color="lightText">
                A central location for discovering Nigeria's best talent
              </P1>
              <Flex>
                <PrimaryButton onClick={() => setModal(true)} mr={7}>
                  Become a freelancer
                </PrimaryButton>
                <SecondaryButton onClick={() => history.push("/discover")}>
                  Find talent
                </SecondaryButton>
              </Flex>
            </Box>
            <Box className="profile box-container">
              <img src={profile} alt="profile" />
            </Box>
          </Flex>
        </Container>
      </StyledTopLanding>
      <StyledBottomLanding>
        {data &&
          data.users
            .slice(0, 6)
            .map(({ id, firstName, lastName, role, shortBio, photoURL }) =>
              firstName && lastName && role ? (
                <FreelancerCard
                  id={id}
                  key={id}
                  name={`${firstName || ""} ${lastName || ""}`}
                  role={role}
                  shortBio={shortBio}
                  photoURL={photoURL || "https://via.placeholder.com/150"}
                />
              ) : null
            )}
      </StyledBottomLanding>
    </>
  );
};

const StyledBottomLanding = styled.div`
  margin: 0 auto;
  padding: ${props => props.theme.space[7]}px;
  max-width: ${MAX_PAGE_WIDTH}px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${props => props.theme.space[8]}px;
`;

const StyledTopLanding = styled.div`
  margin: 0 auto;
  padding: 0 ${props => props.theme.space[7]}px;
  background: ${props => props.theme.colors.background};
  .box-container button {
    box-shadow: ${props => props.theme.shadows.deepDark};
    -webkit-box-shadow: ${props => props.theme.shadows.deepDark};
    -moz-box-shadow: ${props => props.theme.shadows.deepDark};
  }

  .box-container {
    width: 46%;
  }

  .profile {
    position: relative;
    img {
      width: 100%;
      max-width: 500px;
      min-width: 400px;
      position: absolute;
      right: -180px;
      top: 140px;
      bottom: 0;
      border-radius: ${props => props.theme.radii[2]}px;
      transform: translate(-50%, -50%) rotate3d(0.342, -0.94, 0, 22deg)
        rotateZ(7deg);
      box-shadow: 37.2px 62.5px 125px -25px rgba(50, 50, 93, 0.5),
        22.3px 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);
    }
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints[0]}) {
    .flex-container {
      flex-direction: column;
      .box-container {
        width: 100%;
      }
      .profile.box-container {
        display: none;
      }
    }
  }
`;

export default Landing;
